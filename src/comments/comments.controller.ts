import { commentsModel, Comment } from './comments.model';
import { blogsModel } from '../blogs/blogs.model';

import response from '../helpers/response';
import { Params } from '../helpers/url.variables';
import http from 'http';

export default class {
  req: http.IncomingMessage;
  res: http.ServerResponse;
  params: Params;
  body: Comment;

  constructor(req, res, params, body) {
    this.req = req;
    this.res = res;
    this.params = params;
    this.body = body;
  }

  getComments = async () => {
    try {
      await this.verifyBlog();
      const comments = await commentsModel
        .find({ blogID: this.params.blogId })
        .exec();
      if (comments.length) {
        response(200, { comments }, this.res);
      } else {
        response(404, { message: 'No comments found' }, this.res);
      }
    } catch (error) {
      response(500, { message: 'Uh! error server' }, this.res);
    }
  };
  getComment = async () => {
    try {
      await this.verifyBlog();
      const comments = await commentsModel
        .find({ blogID: this.params.blogId, _id: this.params.commentId })
        .exec();
      if (comments) {
        response(200, { comments }, this.res);
      } else {
        response(404, { message: 'No comments found' }, this.res);
      }
    } catch (error) {
      response(500, { message: 'Uh! error server' }, this.res);
    }
  };
  createComment = async () => {
    await this.verifyBlog();

    try {
      await commentsModel.create({
        content: this.body.content,
        blogID: this.params.blogId,
      });
      response(200, { message: 'comment created successfully' }, this.res);
    } catch (err) {
      response(500, { message: err.message }, this.res);
    }
  };
  editComment = async () => {
    await this.verifyBlog();
    try {
      await commentsModel.updateOne(
        { _id: this.params.commentId },
        { content: this.body.content },
      );
      response(200, { message: 'comment has been updated' }, this.res);
    } catch (err) {
      response(500, { message: err.message }, this.res);
    }
  };
  deleteComment = async () => {
    await this.verifyBlog();
    try {
      await commentsModel.deleteOne({ _id: this.params.commentId });
      response(200, { message: 'blog already deleted' }, this.res);
    } catch (error) {
      response(500, { message: error.message }, this.res);
    }
  };
  verifyBlog = async (): Promise<void> => {
    try {
      const blog = await blogsModel.findOne({ _id: this.params.blogId }).exec();
      if (!blog) {
        response(404, { message: 'No comments, blog not found' }, this.res);
      }
    } catch (error) {
      response(500, { message: error.message }, this.res);
    }
  };
}
