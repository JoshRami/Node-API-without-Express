export interface Params {
  blogId?: string | number;
  commentId?: string | number;
}
export const getParams = (endpoint: string, url: string): Params => {
  const params: Params = {};

  const endpointParts = endpoint.split('/').slice(1);
  const reqUrlParts = url.split('/').slice(1);

  endpointParts.forEach((part, index) => {
    const paramKey = part.slice(1);
    if (part.startsWith(':')) {
      params[paramKey] = reqUrlParts[index];
    }
  });
  return params;
};
