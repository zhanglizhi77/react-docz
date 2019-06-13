const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');

module.exports = {
    entry:{
        index:'./src/index.js',
        vendor:[
            'react',
            'react-dom',
            'react-router-dom'
        ]
    },
    module:{
        rules:[
            {
                test:/\.js|jsx$/,
                use:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.less/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpe?g|git)$/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:1024
                    }
                }]
            }
        ]
    },
    plugins:[
        new Webpack.optimize.CommonsChunkPlugin({
            name:['vendor','mainfest'],
            filename:'index.[hash:4].js'
        }),
        new HtmlWebpackPlugin({
            template:'src/index.html',
            title:'my-react-app'
        })
    ]
}