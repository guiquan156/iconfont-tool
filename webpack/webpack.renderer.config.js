const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const htmlPlugin = new HtmlPlugin({
    template: './src/renderer/index.html'
});

module.exports = {
    entry: {
        app: './src/renderer/app.js'
    },
    output: {
        path: path.resolve(__dirname, "../app/dist/renderer"),
        filename: '[name].js'
    },
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.(scss|sass)$/,
                use: extractSass.extract({
                    use: [{
                        loader: 'style-loader'
                    }, {
                        loader: 'css-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    },
                  },
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 8192
                    }
                  }
                ]
            }
        ]
    },
    plugins: [
        extractSass,
        htmlPlugin
    ],
    devServer: {
        port: 8000
    }
};