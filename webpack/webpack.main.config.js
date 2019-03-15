const path = require('path');

module.exports = {
    entry: {
        app: './src/main/index.js'
    },
    output: {
        path: path.resolve(__dirname, "../app/main"),
        filename: '[name].js'
    },
    externals: (context, request, callback) => {
        callback(null, request.charAt(0) === '.' ? false : `require('${request}');`);
    },
    target: 'electron-main'
};