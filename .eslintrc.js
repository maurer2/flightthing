module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:perfectionist/recommended-natural',
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
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'no-restricted-exports': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    'prettier/prettier': 'error',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    // Redux toolkit with immer.js
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
    'no-console': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
};
