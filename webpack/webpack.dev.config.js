var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, "../");

module.exports = {
    entry: [
        path.join(__dirname, '../index.jsx')
    ],
    mode: 'development',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}