import config from '../src/config';

test('exports ESLint config', () => {
  expect(config).toHaveProperty('extends');
  expect(config).toHaveProperty('rules');
});

test('extends @lboecker/eslint-config', () => {
  expect(config.extends).toContain('@lboecker/eslint-config');
});
