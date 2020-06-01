const config = {
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'prettier'],
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
};

export default config;
