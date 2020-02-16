const path = require("path");
const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');

module.exports = merge(base, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
});
