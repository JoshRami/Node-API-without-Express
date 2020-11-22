import { Comment } from '../comments/comments.model';
import { Blog } from '../blogs/blogs.model';
import http from 'http';
import { blogs, comments } from './endpoints';

type ResponseBody = string | blogs | comments;

type blogs = Blog | Blog[];
type comments = Comment | Comment[];

export default (
  status: number,
  body: ResponseBody,
  res: http.ServerResponse,
) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  if (typeof body === 'string') {
    res.write(JSON.stringify({ message: body }));
  } else if (Array.isArray(body)) {
    res.write(JSON.stringify({ ...body }));
  } else {
    res.write(JSON.stringify(body));
  }
  res.end();
};
