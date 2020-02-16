const merge = require('webpack-merge');
const base = require('./webpack.config.base.js');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
  mode: "production",
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserJSPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }), new OptimizeCSSAssetsPlugin({})],
  },
});
