const { resolve } = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_module/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [new TsconfigPathsPlugin({})],
  },
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
};
