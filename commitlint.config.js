/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', []],
    'footer-max-line-length': [0, 'always'], // Make sure there is never a max-line-length by disabling the rule
  },
  parserPreset: {
    parserOpts: {
      noteKeywords: ['Closes:', 'Refs:'], // Create a custom keyword to distinguish the footer
    },
  },
}
