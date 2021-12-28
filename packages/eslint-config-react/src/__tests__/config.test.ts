import config from '../config';

test.each([
  '@lboecker/eslint-config',
  'plugin:react/recommended',
  'plugin:react-hooks/recommended',
])('extends %s', (sharableConfig) => {
  expect(config.extends).toContain(sharableConfig);
});
