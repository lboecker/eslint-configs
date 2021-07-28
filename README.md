# eslint-configs

![CI Status](https://img.shields.io/github/workflow/status/lboecker/eslint-configs/CI/main?label=ci)

Lukas Böcker's ESLint configs

## Available configs

- [@lboecker/eslint-config](packages/eslint-config)
- [@lboecker/eslint-config-react](packages/eslint-config-react)

## Contributing

1. `yarn install`
2. `yarn build`
3. Add your changes

## Debugging

To output the final config for a given file, run ESLint with the following
options:

```
yarn eslint --no-eslintrc -c <config> --print-config <file>
```

For example, run:

```sh
yarn eslint \
  --no-eslintrc \
  -c packages/eslint-config-react/dist/index.js \
  --print-config __tests__/example.test.tsx
```

## Releasing a new version

1. `yarn lerna version`
2. `git push && git push --tags`
3. `yarn lerna publish from-package` or `yarn lerna publish from-git`

## Updating Yarn

1. `yarn set version latest`
2. `yarn install`

## Updating Yarn plugins

```
yarn plugin import <name>
```

## License

[ISC](LICENSE)
