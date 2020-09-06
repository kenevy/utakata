const path = require('path');
const { merge } = require('webpack-merge');
const webpackConfigBase = require('./webpack.base.config.js');


const webpackConfigDev = {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',
  plugins: [
    // new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
    inline: true,
    port: 8000,
  }
};


module.exports = merge(webpackConfigBase, webpackConfigDev);
