const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index',
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'public/index.html'
    })]
};
