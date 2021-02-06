import { Linter } from 'eslint';

const config: Linter.Config = {
  plugins: ['react-hooks'],
  extends: [
    '@lboecker/eslint-config',
    'plugin:import/react',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#eslint
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};

export default config;
