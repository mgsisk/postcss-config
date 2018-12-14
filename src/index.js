const postcss = require('postcss')

module.exports = postcss.plugin('@mgsisk/postcss-config', ()=> (_root, result)=> {
  result.processor
    .use(require('postcss-import'))
    .use(require('@mgsisk/postcss-modular-rhythm'))
    .use(require('postcss-easings'))
    .use(require('postcss-short'))
    .use(require('postcss-preset-env')({
      stage: 0,
      features: {'custom-properties': {preserve: false}},
    }))
    .use(require('cssnano')({preset: 'default'}))
})
