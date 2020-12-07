const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.common.js');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const parseArgs = require('minimist');
const { env } = parseArgs(process.argv);
const dotenv = require('dotenv').config({
	path: path.resolve(__dirname, '..', `.env${env ? '.' + env : ''}`)
})

module.exports = merge(config.common, {
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '..', 'dist'),
	},
	plugins: [
		new webpack.DefinePlugin({
			'env': JSON.stringify({
				'NODE_ENV': 'development',
				'APP_ENV': 'local',
				'APP_VERSION': require('../package.json').version,
				...dotenv.parsed,
			})
		}),
		new HtmlWebpackPlugin({
			title: config.appName,
			template: 'app/app_debug.html',
			favicon: config.favicon,
		}),
		new BundleAnalyzerPlugin(),
	],
});