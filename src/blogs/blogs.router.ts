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
    Blogs.getBlogs();
  } else if (endpoint === blogs.endpoint && method === 'POST') {
    Blogs.createBlog();
  } else if (endpoint === blog.endpoint && method === 'PUT') {
    Blogs.editBlog();
  } else if (endpoint === blog.endpoint && method === 'DELETE') {
    Blogs.deleteBlog();
  } else {
    response(
      404,
      { message: `${endpoint} not support method: ${req.method}` },
      res,
    );
  }
};
