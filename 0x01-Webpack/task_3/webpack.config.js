const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    port: 8564,
  },
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ "style-loader", "css-loader" ],
      },
      {
        test: /\.(png|jpe?g)$/i,
        type: "asset"
      },
    ],
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  plugins: [ new HtmlWebpackPlugin(),  new CleanWebpackPlugin() ],
};
