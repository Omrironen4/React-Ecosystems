const path = require('path');
const webpack = require('webpack');

// Here we have our only export, a JSON which will contain all of our JS Webpack configuration data.
module.exports = {
    // entry will be our entry point for webpack... which will be the index.js files, since that's the one that imports all the others. 
    // our webpack mode will be development mode.
    // we will have rules that transform our ES6 into regular JS
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }

        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    devServer: {
        static: path.join(__dirname, "public/"),
        port: 3000,
        devMiddleware: {
          publicPath: "http://localhost:3000/dist/",
        },
        hot: "only",
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};