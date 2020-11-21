import * as http from 'http';
import * as url from '../helpers/url.variables';
import { comments, comment } from '../helpers/endpoints';

export default async (endpoint: string, req: http.IncomingMessage) => {
  if (endpoint === comments.commentsEndpoint) {
  } else if (endpoint === comment.commentEndpoint) {
  }
};
