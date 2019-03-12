const path = require('path');

module.exports = {
    entry: {
        app: './src/main/index.js'
    },
    output: {
        path: path.resolve(__dirname, "../app/main"),
        filename: '[name].js'
    },
    target: 'electron-main'
};