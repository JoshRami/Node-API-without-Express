export const getUrlVariables = (endpoint: string, url: string) => {
  const params = {};

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
