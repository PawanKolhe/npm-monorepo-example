# npm-monorepo-example

This repo showcases the [phantom dependency issue](https://rushjs.io/pages/advanced/phantom_deps/) eliminated in a pnpm monorepo. 

- `date-fns` has to be explicitly added to `@certa/common` package.json.

## How to run

```bash
pnpm install
pnpm run start
```

## How to test

- Remove `cypress` from root `package.json` and run `pnpm install`.
- Dependency versions will remain stable.

