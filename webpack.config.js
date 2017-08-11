'use strict'

const uglifyjs = require('uglifyjs-webpack-plugin')

const DEV_ENV = process.env.NODE_ENV === 'dev'

const config = {
	context: __dirname + '/src',
	entry: './app.js',
	output: {
			path: __dirname + '/dist',
			filename: '[name].bundle.js',
	},
	devtool: DEV_ENV ? 'cheap-module-source-map' : 'source-map',
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'eslint-loader',
				},
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [],
}

if (!dev) {
	config.plugins.push(new uglifyjs({
		sourceMap: true,
	}))
}

module.exports = config
