const isTest = String(process.env.NODE_ENV) === 'test';

// eslint-disable-next-line func-names
module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/env',
    ['@babel/preset-react', { modules: isTest ? 'commonjs' : false }],
  ];

  const plugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    'transform-react-remove-prop-types',
  ];

  if (isTest) {
    plugins.push('transform-require-context');
  }

  return {
    presets,
    plugins,
  };
};
