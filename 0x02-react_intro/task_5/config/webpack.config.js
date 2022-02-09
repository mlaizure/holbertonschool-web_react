const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8564,
    hot: true,
    compress: true,
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
	      bypassOnDebug: true,
	      disable: true,
	    }
	  },
	],
      }
    ],
  },
};
