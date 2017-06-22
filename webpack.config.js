const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'assets/js'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
		],
	},
};

module.exports = config;
