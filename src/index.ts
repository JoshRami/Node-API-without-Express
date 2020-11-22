import * as http from 'http';
import { config as dotenv } from 'dotenv';

import connect from './config/db';
import { blogs, blog, comments, comment } from './helpers/endpoints';
import blogsRouter from './blogs/blogs.router';
import commentsRouter from './comments/comments.router';
import sendResponse from './helpers/response';

(async () => {
  dotenv();
  await connect();
})();

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    req.on('data', (chunk) => {
      const body = JSON.parse(chunk);
      if (blogs.search === req.url) {
        blogsRouter(req, res, blogs.endpoint, body);
        console.log('here?');
      } else if (blog.regex.test(req.url)) {
        blogsRouter(req, res, blog.endpoint, body);
      } else if (comments.regex.test(req.url)) {
        commentsRouter(comments.endpoint, req, res);
      } else if (comment.regex.test(req.url)) {
        commentsRouter(comment.endpoint, req, res);
      } else {
        sendResponse(404, { message: 'Endpoint not found' }, res);
      }
    });
  },
);

const port = process.env.PORT || 2020;
server.listen(port, () => {
  console.info(`Blog api listening on port:${port} 🌎`);
});
