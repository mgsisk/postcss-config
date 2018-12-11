# @mgsisk/postcss-config

[![Version 0.0.0][img-version]][url-version]
[![Build status][img-build]][url-build]
[![Maintainability grade][img-maintainability]][url-maintainability]
[![Test coverage][img-coverage]][url-coverage]
[![Support development][img-support]][url-support]

> Opinionated preset configuration for PostCSS.

The @mgsisk/postcss-config package is an opinionated [PostCSS][] plugin that
loads other plugins preconfigured for CSS development.

- [postcss-import][]
- [postcss-normalize][]
- [@mgsisk/postcss-modular-rhythm][]
- [postcss-easings][]
- [postcss-short][]
- [postcss-preset-env][]
  ```js
  {
    stage: 0,
    features: {
      'custom-properties': {preserve: false}
    }
  }
  ```
- [postcss-color-mod-function][]
- [cssnano][]
  ```js
  {
    preset: 'default'
  }
  ```

[PostCSS]: https://postcss.org/
[postcss-import]: https://github.com/postcss/postcss-import
[postcss-normalize]: https://github.com/csstools/postcss-normalize
[@mgsisk/postcss-modular-rhythm]: https://github.com/mgsisk/postcss-modular-rhythm
[postcss-easings]: https://github.com/postcss/postcss-easings
[postcss-short]: https://github.com/jonathantneal/postcss-short
[postcss-preset-env]: https://github.com/csstools/postcss-preset-env
[postcss-color-mod-function]: https://github.com/jonathantneal/postcss-color-mod-function
[cssnano]: https://github.com/cssnano/cssnano

## Installation

```sh
npm install --save-dev @mgsisk/postcss-config
```

## Usage

```js
// postcss.config.js

module.exports = {
  plugins: [
    …
    require('@mgsisk/postcss-config'),
    …
  ]
}
````

## Support

[Support][] resources are available.

[support]: https://github.com/mgsisk/postcss-config/blob/master/support.md

## Contribute

[Contributions][] are always welcome.

[Contributions]: https://github.com/mgsisk/postcss-config/blob/master/contributing.md

[img-version]: https://img.shields.io/npm/v/@mgsisk/postcss-config.svg?logo=npm
[img-build]: https://img.shields.io/travis/mgsisk/postcss-config.svg?logo=travis
[img-maintainability]: https://api.codeclimate.com/v1/badges/1dfcbf9ccae6b7313eab/maintainability
[img-coverage]: https://api.codeclimate.com/v1/badges/1dfcbf9ccae6b7313eab/test_coverage
[img-support]: https://img.shields.io/badge/donate-coffee-darkorange.svg?logo=gratipay&logoColor=fff

[url-version]: https://npmjs.com/package/@mgsisk/postcss-config
[url-build]: https://travis-ci.org/mgsisk/postcss-config
[url-maintainability]: https://codeclimate.com/github/mgsisk/postcss-config/maintainability
[url-coverage]: https://codeclimate.com/github/mgsisk/postcss-config/test_coverage
[url-support]: https://buymeacoffee.com/mgsisk
