var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin=require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
module.exports = {
  publicPath: isProduction ? '/' : '/',
  outputDir: "dist",
  filenameHashing: true,
  devServer: {                // 本地开发配置
    host: 'localhost',
    port: 8095,
    https: false,
    hotOnly: false,
    // proxy: 'http://39.105.159.181:6789', // 设置代理
    proxy: 'http://127.0.0.1:6789',
    before: app => { }
  },
  configureWebpack: config => {
    if (isProduction) {
      // 为生产环境修改配置...
      config.plugins.push(
        //生产环境自动删除console
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: 4,
        }),
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
      })
      );

    }
  },
}