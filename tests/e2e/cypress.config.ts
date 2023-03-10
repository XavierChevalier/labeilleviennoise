import { defineConfig } from 'cypress'

const BASE_URL_WEBSITE = 'http://localhost:3000'

export default defineConfig({
  projectId: '6ps5vm',
  env: {
    BASE_URL_WEBSITE,
    BASE_URL_AUTH: 'http://localhost:3001',
    BASE_URL_BLOG: 'https://boutique.labeilleviennoise.com/blogs/news',
    BASE_URL_SHOP: 'https://boutique.labeilleviennoise.com',
  },
  e2e: {
    baseUrl: BASE_URL_WEBSITE,
    // @see https://github.com/testing-library/cypress-testing-library/issues/221#issuecomment-1400501843
    experimentalOriginDependencies: true,
  },
})
