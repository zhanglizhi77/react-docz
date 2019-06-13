const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const prodConfig = {
    devtool: 'source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
    ]
}
module.exports = merge(common,prodConfig);