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
    'plugin:astro/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
  globals: {
    astroHTML: 'readonly',
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
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'prettier/prettier': ['off'],
      },
    },
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
