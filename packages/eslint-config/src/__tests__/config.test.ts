import config from '../config';

test('exports ESLint config', () => {
  expect(config).toHaveProperty('extends');
  expect(config).toHaveProperty('rules');
});

test('extends eslint:recommended', () => {
  expect(config.extends).toContain('eslint:recommended');
});

test.each(['jsx-a11y', 'react-hooks', 'react'])(
  'does not include eslint-plugin-%s',
  (plugin) => {
    expect(config.plugins).not.toContain(plugin);
  }
);
