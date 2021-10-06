/*
 * @Author: jiangjin
 * @Date: 2021-10-06 10:41:02
 * @LastEditTime: 2021-10-06 11:41:40
 * @LastEditors: jiangjin
 * @Description:
 *
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name]-[contenthash:8].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'index.html',
      template: 'index.html'
    })
  ],
  devServer: {
    static: './dist',
    port: 4000,
    hot: true,
  },
};