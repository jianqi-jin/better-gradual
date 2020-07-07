const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
console.log(__dirname)
module.exports = {
    mode: 'development',
    entry: {
        main: __dirname + '/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"
        })
    ]
}