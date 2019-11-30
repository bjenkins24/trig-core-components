// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/env', '@babel/preset-react'];
  const plugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    'transform-react-remove-prop-types',
    'transform-require-context',
  ];

  return {
    presets,
    plugins,
  };
};
