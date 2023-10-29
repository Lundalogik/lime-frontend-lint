# Lime Frontend Lint

Reusable lint rules for use in other packages.

## Installation

Install using **npm**:

```sh
npm i -D @limetech/eslint-config
```

Then put a file called `.eslintrc.js` in your package root, with the following
content:

```js
/* eslint-env node */
module.exports = {
    extends: ['@limetech/eslint-config'],
};
```

Then either copy the file at `node_modules/@limetech/eslint-config/.prettierrc`
to your package root, or create a symlink called `.prettierrc` in the package
root, pointing to `node_modules/@limetech/eslint-config/.prettierrc`.

Finally, add a script for running eslint to your `package.json`, for example:

```json
{
  …
  "scripts": {
    "lint": "eslint \"**/*.{ts,tsx,js}\" --max-warnings=0",
    "lint:fix": "eslint \"**/*.{ts,tsx,js}\" --fix --max-warnings=0"
  },
}
```

You can then use `npm run lint` in your CI workflows, as it will fail on any
warnings or errors. On your own machine, you would typically run
`npm run lint:fix` instead, to have eslint automatically fix as many of the
problems as possible, and only output warnings or errors for problems that
cannot be fixed automatically.
