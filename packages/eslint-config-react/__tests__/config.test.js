import config from '../src/config';

test('exports ESLint config', () => {
  expect(config).toHaveProperty('plugins');
  expect(config).toHaveProperty('extends');
});

test('extends @lboecker/eslint-config', () => {
  expect(config.extends).toContain('@lboecker/eslint-config');
});

test.each(['jsx-a11y', 'react-hooks', 'react'])(
  'includes eslint-plugin-%s',
  (plugin) => {
    expect(config.plugins).toContain(plugin);
  }
);
