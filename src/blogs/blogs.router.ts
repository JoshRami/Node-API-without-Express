import * as http from 'http';
import * as url from '../helpers/url.variables';
import { blogs, blog } from '../helpers/endpoints';

export default async (endpoint: string, req: http.IncomingMessage) => {
  if (endpoint === blogs.blogsEndpoint) {
  } else if (endpoint === blog.blogEndpoint) {
  }
};
