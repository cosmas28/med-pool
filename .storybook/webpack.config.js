const devConfig = require("../webpack.config.base");

module.exports = {
  resolve: devConfig.resolve,
  module: {
    rules: devConfig.module.rules,
  },
};
