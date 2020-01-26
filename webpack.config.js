const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  target: 'node',
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  entry: {
    './index': './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: '@trig-app/core-components',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  plugins: [
    /* new BundleAnalyzerPlugin() */
  ],
  externals: [
    'styled-components',
    'lodash',
    'react',
    'react-dom',
    'prop-types',
    'react-final-form',
    'react-modal',
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      { test: /\.svg$/, loader: 'svg-sprite-loader' },
    ],
  },
};
