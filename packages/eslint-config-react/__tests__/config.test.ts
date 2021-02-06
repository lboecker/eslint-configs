import config from '../src/config';

test('exports ESLint config', () => {
  expect(config).toHaveProperty('plugins');
  expect(config).toHaveProperty('extends');
});

test('extends @lboecker/eslint-config', () => {
  expect(config.extends).toContain('@lboecker/eslint-config');
});
