import config from '../src/config';

test('exports ESLint config', () => {
  expect(config).toHaveProperty('plugins');
  expect(config).toHaveProperty('extends');
});

test('includes Prettier plugin', () => {
  expect(config.plugins).toContain('prettier');
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
