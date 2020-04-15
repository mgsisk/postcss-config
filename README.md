# @mgsisk/postcss-config

Opinionated configuration for PostCSS.

[![Latest release][badge-release]][url-release]
[![Build status][badge-build]][url-build]
[![Code maintainability][badge-maintainability]][url-maintainability]
[![Test coverage][badge-coverage]][url-coverage]
[![Maintainer funding][badge-funding]][url-funding]

@mgsisk/postcss-config is an opinionated [PostCSS][] plugin that loads other
plugins preconfigured for CSS development. Includes the following plugins:

- [postcss-import][]
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
- [cssnano][]
  ```js
  {preset: 'default'}
  ```

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
```

[Support resources][] are available if you need help with this project. Refer to
individual plugin documentation for more information on how each works.

## Contributing

[Contributions][] are always welcome; please read the [code of conduct][]
before you begin. See the [changelog][] for notable project changes, and report
any [security][] concerns you find.

## Thanks

To the [contributors][] that help to build, fund, and maintain this project;
the [other works][] that have contributed to and inspired this project; and
anyone that has found this project useful.

## License

[ISC][]

[@mgsisk/postcss-modular-rhythm]: https://github.com/mgsisk/postcss-modular-rhythm
[badge-build]: https://img.shields.io/travis/com/mgsisk/postcss-config
[badge-coverage]: https://img.shields.io/codeclimate/coverage/mgsisk/postcss-config
[badge-funding]: https://img.shields.io/liberapay/receives/mgsisk
[badge-maintainability]: https://img.shields.io/codeclimate/maintainability/mgsisk/postcss-config
[badge-release]: https://img.shields.io/github/v/tag/mgsisk/postcss-config?sort=semver
[changelog]: https://github.com/mgsisk/postcss-config/blob/master/docs/CHANGELOG.md
[code of conduct]: https://github.com/mgsisk/postcss-config/blob/master/docs/CODE_OF_CONDUCT.md
[Contributions]: https://github.com/mgsisk/postcss-config/blob/master/docs/CONTRIBUTING.md
[contributors]: https://github.com/mgsisk/postcss-config/blob/master/docs/AUTHORS.md
[cssnano]: https://github.com/cssnano/cssnano
[isc]: https://github.com/mgsisk/postcss-config/blob/master/LICENSE.md
[other works]: https://github.com/mgsisk/postcss-config/blob/master/docs/THANKS.md
[postcss-easings]: https://github.com/postcss/postcss-easings
[postcss-import]: https://github.com/postcss/postcss-import
[postcss-preset-env]: https://github.com/csstools/postcss-preset-env
[postcss-short]: https://github.com/jonathantneal/postcss-short
[postcss]: https://postcss.org
[security]: https://github.com/mgsisk/postcss-config/blob/master/docs/SECURITY.md
[support resources]: https://github.com/mgsisk/postcss-config/blob/master/docs/SUPPORT.md
[url-build]: https://travis-ci.com/mgsisk/postcss-config
[url-coverage]: https://codeclimate.com/github/mgsisk/postcss-config
[url-funding]: https://github.com/mgsisk/postcss-config/blob/master/docs/CONTRIBUTING.md#funding
[url-maintainability]: https://codeclimate.com/github/mgsisk/postcss-config
[url-release]: https://github.com/mgsisk/postcss-config/releases
