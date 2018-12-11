/* eslint-disable no-undefined */
const tap = require('tap')
const postcss = require('postcss')
const plugin = require('../src')

postcss([plugin])
  .process('@import "tests/index.css";', {from: undefined})
  .then((result)=> {
    tap.equal(result.css, 'a{color:red}', 'It uses postcss-import')
  })

postcss([plugin])
  .process('@import-normalize;', {from: undefined})
  .then((result)=> {
    tap.notEqual(result.css, '@import-normalize;', 'It uses postcss-normalize')
  })

postcss([plugin])
  .process('a{font-size:0mfs}', {from: undefined})
  .then((result)=> {
    tap.equal(result.css, 'a{font-size:1em}', 'It uses @mgsisk/postcss-modular-rhythm')
  })

postcss([plugin])
  .process('a{transition-easing:ease-in-sine}', {from: undefined})
  .then((result)=> {
    tap.match(result.css, /cubic-bezier/u, 'It uses postcss-easings')
  })

postcss([plugin])
  .process('a{margin: * * 1em}', {from: undefined})
  .then((result)=> {
    tap.equal(result.css, 'a{margin-bottom:1em}', 'It uses postcss-short')
  })

postcss([plugin])
  .process(':root{--color:red}a{color:var(--color); &:hover{color: blue}}', {from: undefined})
  .then((result)=> {
    tap.equal(result.css, 'a{color:red}a:hover{color:#00f}', 'It uses postcss-preset-env')
  })

postcss([plugin])
  .process('a{color:color-mod(red alpha(50%))}', {from: undefined})
  .then((result)=> {
    tap.equal(result.css, 'a{color:rgba(255,0,0,.5)}', 'It uses postcss-color-mod-function')
  })

postcss([plugin])
  .process('a {\n  color: red;\n}\n', {from: undefined})
  .then((result)=> {
    tap.equal(result.css, 'a{color:red}', 'It uses cssnano')
  })
