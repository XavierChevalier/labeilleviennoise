const { defineConfig } = require('cypress')

const BASE_URL_WEBSITE = 'http://localhost:3000'

module.exports = defineConfig({
  projectId: '6ps5vm',
  env: {
    BASE_URL_WEBSITE,
    BASE_URL_AUTH: 'http://localhost:3001',
    BASE_URL_BLOG: 'http://localhost:3002',
    BASE_URL_SHOP: 'http://localhost:3003',
  },
  e2e: {
    baseUrl: BASE_URL_WEBSITE,
  },
})
