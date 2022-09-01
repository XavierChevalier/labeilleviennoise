module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  rules: {
    // @see https://medium.com/swlh/prefer-interfaces-4fb72c25b4c
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-unused-vars': ['error'],
    'vue/valid-define-props': ['off'],
    'import/no-unresolved': ['off'], // turn off errors for missing imports (duplicated rule)
    'import/newline-after-import': ['error'],
    'import/order': ['error', { alphabetize: { order: 'asc' } }],
  },
  overrides: [
    {
      files: ['*.js'],
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
