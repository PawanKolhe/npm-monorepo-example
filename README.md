# npm-monorepo-example

This repo showcases the [phantom dependency issue](https://rushjs.io/pages/advanced/phantom_deps/) in a npm monorepo. 

- `date-fns` is being used in `@certa/common` package but not listed in its `package.json`.

## How to run

```bash
npm install
npm run start
```

## How to cause issue

- Remove `cypress` from root `package.json` and run `npm install`.
- This will cause the `date-fns` version to change from v2 to v1 in `@certa/common` package.

## How to fix

Explicitly add `date-fns` to `@certa/common` package.json.

```json
"dependencies": {
    "date-fns": "^2.30.0"
}
```
