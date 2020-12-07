const webpack = require('webpack');
const { merge } = require('webpack-merge');
const config = require('./webpack.common.js');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const parseArgs = require('minimist');
const { env } = parseArgs(process.argv);
const dotenv = require('dotenv').config({
	path: path.resolve(__dirname, '..', `.env${env ? '.' + env : ''}`)
})

module.exports = merge(config.common, {
	target: 'web',
	devtool: 'cheap-module-source-map',
	mode: 'production',
	output: {
		path: path.join(__dirname, '..', 'dist')
	},
	plugins: [
		new webpack.DefinePlugin({
			'env': JSON.stringify({
				'NODE_ENV': 'production',
				'APP_ENV': 'prd',
                'APP_VERSION': require('../package.json').version,
                ...dotenv.parsed,
			})
		}),
		new HtmlWebpackPlugin({
			title: config.appName,
			template: 'app/app.html',
            favicon: config.favicon,
		}),
        new webpack.optimize.AggressiveMergingPlugin()
	],
	optimization: {
		minimize: true,
        minimizer: [new TerserPlugin({
            cache: true,
            parallel: true,
            terserOptions: {
                ecma: 6,
            },
        })],
	},
});