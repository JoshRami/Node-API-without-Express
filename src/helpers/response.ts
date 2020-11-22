import { Comment } from '../comments/comments.model';
import { Blog } from '../blogs/blogs.model';
import http from 'http';

interface ResponseBody {
  message?: string;
  blogs?: Blog[];
  comments?: Comment[];
}
export default (
  status: number,
  body: ResponseBody,
  res: http.ServerResponse,
) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(body));
  res.end();
};
