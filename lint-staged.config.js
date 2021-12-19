'use strict';

module.exports = {
  '*.{js,jsx,ts,tsx}': (files) => [
    'yarn build',
    `eslint --ext .js,.jsx,.ts,.tsx --fix --max-warnings 0 ${files.join(' ')}`,
    `jest --ci --findRelatedTests --passWithNoTests ${files.join(' ')}`,
    'yarn typecheck',
  ],
  '*.{json,md,yaml,yml}': (files) => `prettier --write ${files.join(' ')}`,
};
