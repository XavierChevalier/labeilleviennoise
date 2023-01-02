export const getCurrentBaseUrl = (request: Request): string =>
  new URL(request.url).origin
