const slsw = require('serverless-webpack');

module.exports = {
  target: 'node',
  entry: slsw.lib.entries,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['env', { modules: false }],
          ],
        },
      }],
  },
};