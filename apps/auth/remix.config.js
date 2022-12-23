/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  devServerPort: 8001,
  serverBuildTarget: 'netlify',
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? './server.js'
      : undefined,
  ignoredRouteFiles: ['**/.*'],
}
