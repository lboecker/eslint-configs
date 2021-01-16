# eslint-configs

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/lboecker/eslint-configs/CI/master?label=ci)

Lukas Böcker's ESLint configs

## Available configs

- [@lboecker/eslint-config](packages/eslint-config)
- [@lboecker/eslint-config-react](packages/eslint-config-react)

## Contributing

1. `yarn install && yarn hooks:install`
2. `yarn build`
3. Add your changes

## Releasing a new version

1. `yarn lerna version`
2. `git push && git push --tags`
3. `yarn lerna publish from-git` or `yarn lerna publish from-package`

## Updating Yarn

1. `yarn set version latest`
2. `yarn install`

## License

[ISC](LICENSE)
