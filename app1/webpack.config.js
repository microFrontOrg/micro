/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-05-08 16:03:15
 * @lastEditTime: Do not edit
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const packageName = require('./package.json').name;

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'master.[hash:8].js',
        publicPath: '//localhost:2001/',
        library: `${packageName}-[name]`,
        libraryTarget: 'umd',
        jsonpFunction: `webpackJsonp_${packageName}`,
    },
    devServer: {
        port: 2001,
        host: 'localhost',
        open: true,
        historyApiFallback: true,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ["@babel/plugin-transform-runtime","@babel/plugin-transform-modules-commonjs"]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            React: 'react',
            Component: ['react', 'Component'],
            styled: ['styled-components', 'default']
        })
    ]
}