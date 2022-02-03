const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  devServer: {
    port: 8564,
    contentBase: './public',
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
	test: /\.(gif|png|jpe?g|svg)$/i,
	use: [
	  'file-loader',
	  {
	    loader: 'image-webpack-loader',
	    options: {
              mozjpeg: {
		progressive: true,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
		enabled: false,
              },
              pngquant: {
		quality: [0.65, 0.90],
		speed: 4
              },
              gifsicle: {
		interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
		quality: 75
              }
	    }
	  },
	],
      }
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
