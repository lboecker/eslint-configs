import { Linter } from 'eslint';
import restrictedGlobals from 'confusing-browser-globals';

const config: Linter.Config = {
  plugins: ['import', 'prettier'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  env: {
    browser: true,
    commonjs: true,
    es2017: true,
    node: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-restricted-globals': ['error', ...restrictedGlobals],
    'no-var': 'error',
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-webpack-loader-syntax': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
    {
      files: ['**/__tests__/**', '**/__mocks__/**'],
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      env: {
        'jest/globals': true,
      },
    },
  ],
};

export default config;
