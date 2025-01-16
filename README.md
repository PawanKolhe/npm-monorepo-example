# npm-monorepo-example

This repo showcases the [phantom dependency issue](https://rushjs.io/pages/advanced/phantom_deps/) in a npm monorepo.

## How to run

```bash
npm install
npm run start
```

## How to cause issue

Remove `cypress` from root `package.json` and run `npm install`.

## How to fix

Explicitly add `date-fns` to `@certa/common` package.json.

```json
"dependencies": {
    "date-fns": "^2.30.0"
}
```
