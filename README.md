# ESLint Config Lover
# [![npm version][npm-image]][npm-url]

[npm-image]:https://badge.fury.io/js/eslint-config-lover.svg
[npm-url]:http://npmjs.org/package/eslint-config-lover

Lover's approach to JavaScript and TypeScript.

## Description

This config helps maintain consistent codebase across many projects and contains many useful rules
that will improve your code quality. It's dedicated for JavaScript & TypeScript projects -
both back-end and front-end ones.

## Usage

### Install

```
npm i -D eslint-config-lover
```

Add the following entry to your .eslintrc file:

```json
{
  "extends": ["lover"]
}
```

For TypeScript, create `tsconfig.eslint.json` file right next to your current `tsconfig.json`, that
looks like this:

```json
{
  "extends": "./tsconfig.json",
  "include": [
    "src"
    // all directories you would like to include in linting process
  ]
}
```
