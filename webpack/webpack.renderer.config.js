const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: {
        app: './src/renderer/app.js'
    },
    output: {
        path: path.resolve(__dirname, "app/renderer"),
        filename: '[name].[hash].js'
    },
    target: 'electron-renderer',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        preset: ['es2015', 'react']
                    }
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
            }
        ]
    },
    plugins: [
        extractSass
    ]
};