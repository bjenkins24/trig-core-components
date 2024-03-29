const path = require('path');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  mode: 'production',
  target: 'node',
  devtool: 'source-map',
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  entry: {
    './index': './src/index.js',
    './compositions': './src/compositions.js',
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
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
