# eslint-configs

![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/lboecker/eslint-configs/CI/master?label=ci)

Lukas Böcker's ESLint configs

## Available Configs

- [@lboecker/eslint-config](packages/eslint-config)
- [@lboecker/eslint-config-react](packages/eslint-config-react)

## Contributing

1. `yarn install && yarn build`
2. Add your changes
3. `yarn fix`
4. `yarn lint && yarn typecheck && yarn test`

## Releasing a New Version

1. `yarn lerna version`
2. `git push && git push --tags`
3. `yarn lerna publish from-git` or `yarn lerna publish from-package`

## Updating Yarn

1. `yarn set version latest`
2. `yarn install`

## License

[ISC](LICENSE)
