import { Linter } from 'eslint';
import restrictedGlobals from 'confusing-browser-globals';

const config: Linter.Config = {
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['import'],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Best practices
    'array-callback-return': 'error',
    curly: 'error',
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    'no-caller': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',

    // Variables
    'no-restricted-globals': ['error', ...restrictedGlobals],

    // Stylistic issues
    'no-nested-ternary': 'error',

    // ES2015
    'no-var': 'error',
    'prefer-const': 'error',

    // These are the same rules that eslint-config-react-app uses.
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-webpack-loader-syntax': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:import/typescript',
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
    },
    {
      files: ['**/__tests__/**', '**/__mocks__/**'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};

export default config;
