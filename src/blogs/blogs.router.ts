import * as http from 'http';
import { blogs, blog } from '../helpers/endpoints';
import { Blog } from './blogs.model';
import Controller from './blog.controller';
import { getParams } from '../helpers/url.variables';
import response from '../helpers/response';

export default async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  endpoint: string,
  body: Blog,
) => {
  const method = req.method;
  const params = getParams(endpoint, req.url);
  const Blogs = new Controller(req, res, params, body);

  if (endpoint === blogs.endpoint && method === 'GET') {
    await Blogs.getBlogs();
  } else if (endpoint === blogs.endpoint && method === 'POST') {
    await Blogs.createBlog();
  } else if (endpoint === blog.endpoint && method === 'GET') {
    await Blogs.getBlog();
  } else if (endpoint === blog.endpoint && method === 'PUT') {
    await Blogs.editBlog();
  } else if (endpoint === blog.endpoint && method === 'DELETE') {
    await Blogs.deleteBlog();
  } else {
    response(
      404,
      { message: `${endpoint} not support method: ${req.method}` },
      res,
    );
  }
};
