import config from '../config';

test('extends eslint:recommended', () => {
  expect(config.extends).toContain('eslint:recommended');
});
