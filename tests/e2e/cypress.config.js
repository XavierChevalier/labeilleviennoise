const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: '6ps5vm',
  env: {
    BASE_URL_AUTH: 'http://localhost:3001',
    BASE_URL_BLOG: 'http://localhost:3002',
    BASE_URL_WEBSITE: 'http://localhost:3000',
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})
