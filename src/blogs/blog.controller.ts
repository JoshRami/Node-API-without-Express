import { blogsModel } from './blogs.model';
import response from '../helpers/response';
import { Params } from '../helpers/url.variables';
import http from 'http';

export default class {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  params: Params;
  body: Body;
  constructor(req, res, params, body) {
    this.req = req;
    this.res = res;
    this.params = params;
    this.body = body;
  }
  getBlogs = async () => {
    try {
      const blogs = await blogsModel.find().sort({ createdAt: -1 }).exec();
      if (!blogs) {
        response(404, { message: 'No blogs found' }, this.res);
      }
      response(200, { blogs }, this.res);
    } catch (error) {
      response(500, { message: 'Uh! error server' }, this.res);
    }
  };
  createBlog = async () => {
    const blog = new blogsModel(this.body);
    try {
      await blog.save();
      response(200, { message: 'blog created successfully' }, this.res);
    } catch (err) {
      response(500, { message: err.message }, this.res);
    }
  };
  editBlog = async () => {
    try {
      await blogsModel.updateOne({ _id: this.params.blogId }, this.body);
      response(200, { message: 'blog has been updated' }, this.res);
    } catch (err) {
      response(500, { message: err.message }, this.res);
    }
  };
  deleteBlog = async () => {
    try {
      await blogsModel.deleteOne({ blogId: this.params.blogId });
      response(200, { message: 'blog already deleted' }, this.res);
    } catch (error) {
      response(500, { message: error.message }, this.res);
    }
  };
}
