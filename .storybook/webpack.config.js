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

  config.module.rules.unshift({
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
  });

  // Remove the file loader (is there a better way?) - so the svg sprite loader works
  config.module.rules = config.module.rules.filter((rule, index) => {
    // Index 4 is file loader and index 5 is a second css loader? I don't get why there
    // are two. If I take out the one above I have 0. Whatever this works
    if (index === 4 || index === 5) return false;
    return true;
  });

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../src'),
  ];

  // Return the altered config
  return config;
};
