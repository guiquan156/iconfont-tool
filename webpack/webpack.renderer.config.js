const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "[name].[hash].css",
    disable: process.env.NODE_ENV === "development"
});

const htmlPlugin = new HtmlPlugin({
    template: './src/renderer/index.html'
});

module.exports = {
    entry: {
        app: './src/renderer/app.jsx'
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
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(css)$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }]
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
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            pages: path.resolve(__dirname, '..', 'src/renderer/pages'),
            compponents: path.resolve(__dirname, '..', 'src/renderer/compponents')
        }
    },
    plugins: [
        extractSass,
        htmlPlugin
    ],
    devServer: {
        port: 8000
    }
};