const webpack = require('webpack');
const chalk = require('chalk');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	appName: "Dock",
	favicon: "./app/res/favicon.ico",

	common: {
		entry: {
			bundle: './app/web/index.jsx',
			main: './style/main.scss',
		},

		resolve: {
			extensions: [ '*', '.js', '.jsx' ],
			modules: [
			    path.join(__dirname, '..', '/app'),
			    'node_modules',
			    path.join(__dirname, '..', '/node_modules')
	  		]
		},

		output: {
			filename: 'js/[name].[hash].js',
			publicPath: '/'
		},
		module: {
			rules: [
				//JavaScript and ESX
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react', '@babel/preset-env' ],
							plugins: [
								// Plugins
								'@babel/plugin-transform-runtime',

								// Experimental Plugins
								["@babel/plugin-proposal-class-properties", { "loose": false }],

							],
						}
					}
				},
				//SCSS and CSS
				{
					test: /\.(scss|css)$/,
					use: [
					    MiniCssExtractPlugin.loader,
					    {
					        loader: "css-loader",
					        options: {

					        }
					    },
					    {
					        loader: "sass-loader",
					    },
					]
				},
				//Media
				{
					test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
					use: {
						loader: 'file-loader',
						options: {
							limit: 100000,
							publicPath: "../",
						},
					},
				},
				//JSON
				{
					test: /\.json$/,
					loader: 'json-loader',
				},
			]
	 	},
	 	optimization: {
	 		runtimeChunk: false,
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all',
					},
				},
			},
	 	},
	 	plugins: [
	 		new MiniCssExtractPlugin({
				filename: "css/[name].[hash].css",
				chunkFilename: "[id].css"
			}),
			new ProgressBarPlugin({
				complete: "\u25A0",
				format: `Build [${chalk.blue(':bar')}] ${chalk.green.bold(':percent')} (:elapsed seconds)`,
				clear: false,
			}),
			new webpack.HotModuleReplacementPlugin(),
			new CopyPlugin({
				patterns: [
					{ from: './app/res', to: 'res' }
				]
			})
		],
		devServer: {
			contentBase: path.join(__dirname, '..', "www"),
			compress: true,
			port: 3000,
			historyApiFallback: {
				disableDotRule: true
			},
		},
	}
}