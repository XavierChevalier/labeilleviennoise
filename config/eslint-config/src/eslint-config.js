const fs = require('fs')
const path = require('path')

const workspaces = require('../../../lerna.json').workspaces.map((workspace) =>
  workspace.replace('/*', '')
)

const tsconfigWorkspacesFiles = workspaces.flatMap((workspace) =>
  fs
    .readdirSync(path.join(__dirname, '../../../', workspace))
    .map((directory) => `${workspace}/${directory}/tsconfig.json`)
)

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      // @see https://github.com/import-js/eslint-plugin-import/issues/2301#issuecomment-974473228
      typescript: {
        project: ['tsconfig.json', ...tsconfigWorkspacesFiles],
      },
      node: {
        project: ['tsconfig.json', ...tsconfigWorkspacesFiles],
      },
    },
  },
  rules: {
    // @see https://medium.com/swlh/prefer-interfaces-4fb72c25b4c
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'import/newline-after-import': ['error'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
  },
  overrides: [
    {
      files: ['*.js', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': ['off'],
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        // Parameters in declaration files.
        '@typescript-eslint/no-unused-vars': ['off'],
      },
    },
  ],
}
