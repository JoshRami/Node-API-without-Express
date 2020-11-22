const blogsExp = '/api/blogs';
const blogExp = new RegExp(/^\/api\/blogs\/([^/]+)$/);
const commentsExp = new RegExp(/^\/api\/blogs\/([^/]+)\/comments$/);
const commentExp = new RegExp(/^\/api\/blogs\/([^/]+)\/comments\/([^/]+)$/);

const blogsEndpoint = '/api/blogs';
const blogEndpoint = '/api/blogs/:blogId';
const commentsEndpoint = '/api/blogs/:blogId/comments';
const commentEndpoint = '/api/blogs/:blogId/comments/:commentId';

interface Endpoint {
  search?: string;
  regex?: RegExp;
  endpoint: string;
}
export const blogs: Endpoint = { search: blogsExp, endpoint: blogsEndpoint };
export const blog: Endpoint = { regex: blogExp, endpoint: blogEndpoint };
export const comments: Endpoint = {
  regex: commentsExp,
  endpoint: commentsEndpoint,
};
export const comment: Endpoint = {
  regex: commentExp,
  endpoint: commentEndpoint,
};
