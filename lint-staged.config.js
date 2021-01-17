'use strict';

module.exports = {
  '*.{js,jsx,ts,tsx}': (files) => {
    const joinedFiles = files.join(' ');
    return [
      'yarn build',
      `eslint --ext .js,.jsx,.ts,.tsx --fix --max-warnings 0 ${joinedFiles}`,
      `jest --ci --findRelatedTests --passWithNoTests ${joinedFiles}`,
      'yarn typecheck',
    ];
  },
  '*.{json,yaml,yml}': (files) => `prettier --write ${files.join(' ')}`,
};
