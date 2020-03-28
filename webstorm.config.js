/**
 * @desc: 添加此配置文件之后，webpack就可以识别'@/src/view...'的这种路径，直接按ctrl+单击就可以进入文件
 */

'use strict'
const webpackConfig = require('@vue/cli-service/webpack.config.js')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = Object.assign({}, {
  context: path.resolve(__dirname, './'),
  resolve: {
    extensions: ['.js', '.vue', '.json', '.scss'],
    alias: {
      '@': resolve('src')
    }
  }
}, webpackConfig)

module.exports = webpackConfig
