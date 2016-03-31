const path = require('path');
module.exports = {
	watch: true,
	devtool : 'source-map',

	resolve: {
		root: path.resolve(__dirname, 'src/js')
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				cacheDirectory: true
			}
		}],
		resolve: {
			extensions: ['', '.js']
		}
	},

	entry: {
		client: './client.js'
	},

	output: {
		path: path.resolve('.', 'dist'),
		filename: '[name].js',
		publicPath: './'
	}
}
