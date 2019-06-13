const common = require('./webpack.common');
const merge = require('webpack-merge');
const webpack = require('webpack');

const devConfig = {
    devtool: 'inline-source-map',
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('development')
        })
    ],
    devServer:{
        
    }
}
module.exports = merge(common,devConfig);