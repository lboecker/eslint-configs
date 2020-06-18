import { Linter } from 'eslint';
import config from '../src/config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const index = require('../src') as Linter.Config;

test('exports config', () => {
  expect(index).toBe(config);
});
