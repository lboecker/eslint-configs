import index from '../src';
import config from '../src/config';

test('exports config', () => {
  expect(index).toBe(config);
});
