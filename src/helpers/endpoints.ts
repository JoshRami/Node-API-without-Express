const blogsExp = '/api/blogs';
const blogExp = new RegExp(/^\/api\/blogs\/([^/]+)$/);
const commentsExp = new RegExp(/^\/api\/blogs\/([^/]+)\/comments$/);
const commentExp = new RegExp(/^\/api\/blogs\/([^/]+)\/comments\/([^/]+)$/);

const blogsEndpoint = '/api/blogs';
const blogEndpoint = '/api/blogs/:blogId';
const commentsEndpoint = '/api/blogs/:blogId/comments';
const commentEndpoint = '/api/blogs/:blogId/comments/:commentId';

export const blogs = { blogsExp, blogsEndpoint };
export const blog = { blogExp, blogEndpoint };
export const comments = { commentsExp, commentsEndpoint };
export const comment = { commentExp, commentEndpoint };
