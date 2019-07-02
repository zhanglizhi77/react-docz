const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const px2rem  = require('postcss-plugin-px2rem');
const autoprefixer = require('autoprefixer');

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
                use:['style-loader','css-loader','less-loader','postcss-loader']
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
    optimization:{
        splitChunks:{
            cacheGroups:{
                vendor:{
                    test:/node_modules/,
                    name:'vendor',
                    chunks:'initial'
                }
            }
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html',
            title:'my-react-app'
        }),
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss:()=>{
        //             return [
        //                 autoprefixer,
        //                 px2rem()
        //             ]
        //         }
        //     }
        // })
    ]
}