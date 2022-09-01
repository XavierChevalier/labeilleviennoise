/**
 * As mentioned in the jest docs, we don't usually need to use CSS files during tests,
 * so we can mock them out the test suites by mapping every .css import to a mock file.
 * To do this, let's create a very simple file, which will export an empty object.
 * @see https://blog.antoniolofiego.com/setting-up-a-nextjs-application-with-typescript-jit-tailwind-css-and-jestreact-testing-library
 */
module.exports = {}
