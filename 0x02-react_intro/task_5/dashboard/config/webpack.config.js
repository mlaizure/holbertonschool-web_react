const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  performance: {
    hints: false,
    maxEntrypointSize: 100000,
    maxAssetSize: 100000,
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
  },
  devtool: "inline-source-map",
  devServer: {
    port: 8564,
    hot: true,
    static: [ "dist" ],
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
      },
      {
	test: /\.jsx?$/,
	exclude: /node_modules/,
	use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
	}
      }
    ],
  },
};
