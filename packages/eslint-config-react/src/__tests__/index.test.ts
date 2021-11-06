import { Linter } from 'eslint';
import config from '../config';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const index = require('../') as Linter.Config;

test('exports config', () => {
  expect(index).toBe(config);
});
