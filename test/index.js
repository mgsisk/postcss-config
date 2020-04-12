const plugin = require('../src')
const postcss = require('postcss')
const tap = require('tap')

postcss([plugin])
  .process('@import "test/index.css";', {from: undefined}) /* eslint-disable-line no-undefined */
  .then((result)=> {
    tap.match(result.css, /^a\{/u, 'It uses postcss-import')
    tap.match(result.css, /font-size:1em/u, 'It uses @mgsisk/postcss-modular-rhythm')
    tap.match(result.css, /cubic-bezier/u, 'It uses postcss-easings')
    tap.match(result.css, /margin-bottom:1em/u, 'It uses postcss-short')
    tap.match(result.css, /color:red/u, 'It uses postcss-preset-env')
    tap.equal(result.css.match(/\n/u), null, 'It uses cssnano')
  })
