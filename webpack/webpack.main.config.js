const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/main/index.js'
    },
    output: {
        path: path.resolve(__dirname, "../app/dist/main"),
        filename: '[name].js'
    },
    externals: (context, request, callback) => {
        callback(null, request.charAt(0) === '.' ? false : `require('${request}');`);
    },
    target: 'electron-main',
    plugins: [
        new webpack.DefinePlugin({
            $dirname: '__dirname',
        })
    ]
};