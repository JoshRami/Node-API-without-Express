import * as http from 'http';
//import * as url from '../helpers/url.variables';
import sendResponse from '../helpers/response';

import { comments, comment } from '../helpers/endpoints';
import { getParams } from '../helpers/url.variables';

import Controller from '../comments/comments.controller';
import { Comment } from './comments.model';

export default async (
  req: http.IncomingMessage,
  res: http.ServerResponse,
  body: Comment,
  endpoint: string,
) => {
  const method = req.method;
  const params = getParams(endpoint, req.url);
  const Comments = new Controller(req, res, params, body);

  if (endpoint === comments.endpoint && method === 'GET') {
    await Comments.getComments();
  } else if (endpoint === comments.endpoint && method === 'POST') {
    await Comments.createComment();
  } else if (endpoint === comment.endpoint && method === 'GET') {
    await Comments.getComment();
  } else if (endpoint === comment.endpoint && method === 'PUT') {
    await Comments.editComment();
  } else if (endpoint === comment.endpoint && method === 'DELETE') {
    await Comments.deleteComment();
  } else {
    sendResponse(400, { message: 'Request method not supported' }, res);
  }
};
