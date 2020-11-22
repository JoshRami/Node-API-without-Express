import { blogsModel, Blog } from './blogs.model';
import response from '../helpers/response';
import { Params } from '../helpers/url.variables';
import http from 'http';

export default class {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  params: Params;
  body: Blog;
  constructor(req, res, params, body) {
    this.req = req;
    this.res = res;
    this.params = params;
    this.body = body;
  }
  getBlogs = async () => {
    try {
      const blogs = await blogsModel.find().sort({ createdAt: -1 }).exec();
      if (blogs) {
        response(200, blogs, this.res);
      } else {
        response(404, 'Blogs not found', this.res);
      }
    } catch (error) {
      response(500, 'Uh! error server', this.res);
    }
  };
  getBlog = async () => {
    try {
      const blogs = await blogsModel.findById(this.params.blogId).exec();
      if (blogs) {
        response(200, blogs, this.res);
      } else {
        response(404, 'Blog not found', this.res);
      }
    } catch (error) {
      response(500, 'Uh! error server', this.res);
    }
  };
  createBlog = async () => {
    this.body.createdAt = new Date();
    const blog = new blogsModel(this.body);
    try {
      await blog.save();
      response(200, 'blog created successfully', this.res);
    } catch (err) {
      response(500, err.message, this.res);
    }
  };
  editBlog = async () => {
    try {
      await blogsModel.updateOne({ _id: this.params.blogId }, this.body);
      response(200, 'blog has been updated', this.res);
    } catch (err) {
      response(500, err.message, this.res);
    }
  };
  deleteBlog = async () => {
    try {
      await blogsModel.deleteOne({ blogId: this.params.blogId });
      response(200, 'blog already deleted', this.res);
    } catch (error) {
      response(500, error.message, this.res);
    }
  };
}
