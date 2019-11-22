const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  entry: { './index': './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [new BundleAnalyzerPlugin()],
  externals: [
    'styled-components',
    'lodash',
    'react',
    'react-dom',
    'prop-types',
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