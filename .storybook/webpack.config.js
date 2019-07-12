const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.unshift({
    test: /\.svg$/,
    loader: 'svg-sprite-loader',
  });

  // Remove the file loader (is there a better way?) - so the svg sprite loader works
  config.module.rules = config.module.rules.filter((rule, index) => {
    if (index === 4) return false;
    return true;
  });

  // Return the altered configg
  return config;
};
