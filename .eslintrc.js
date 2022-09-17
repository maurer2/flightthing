module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'next',
    'prettier',
  ],
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: ['tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-exports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        // https://engineering.udacity.com/sorting-imports-on-save-in-react-projects-with-eslint-6fd419b994c3
        groups: [
          // `react` first, `next` second, then packages starting with a character
          ['^react$', '^next', '^[a-z]'],
          // Packages starting with `@`
          ['^@'],
          // Packages starting with `~`
          ['^~'],
          // Imports starting with `../`
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Types
          ['^[^/\\.].*\u0000$', '^.*\u0000$', '^\\..*\u0000$'],
          // Imports starting with `./`
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports
          ['^.+\\.s?css$'],
          // Side effect imports
          ['^\\u0000'],
          // Anything not matched in another group
          ['^'],
        ],
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': 'error',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
