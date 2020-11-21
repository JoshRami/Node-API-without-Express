import * as http from 'http';
import { config as dotenv } from 'dotenv';

import connect from './config/db';
import { blogs, blog, comments, comment } from './helpers/endpoints';
import blogsRouter from './blogs/blogs.router';
import commentsRouter from './comments/comments.router';

(async () => {
  dotenv();
  await connect();
})();

const server = http.createServer((req) => {
  if (blogs.blogsExp === req.url) {
    blogsRouter(blogs.blogsEndpoint, req);
  } else if (blog.blogExp.test(req.url)) {
    blogsRouter(blog.blogEndpoint, req);
  } else if (comments.commentsExp.test(req.url)) {
    commentsRouter(comments.commentsEndpoint, req);
  } else if (comment.commentExp.test(req.url)) {
    commentsRouter(comment.commentEndpoint, req);
  } else {
    console.log('not found');
  }
});

const port = process.env.PORT || 2020;
server.listen(port, () => {
  console.info(`Blog api listening on port:${port} 🌎`);
});
