const autoprefixer = require('autoprefixer');
const px2rem  = require('postcss-plugin-px2rem');
module.exports = () =>({
    plugins:[
        autoprefixer({
            browsers:[
                'last 5 versions',
                'last 10 Chrome versions',
                'last 5 Firefox versions',
                'Safari >= 6', 
                'ie> 8'
            ] //处理浏览器兼容
        }),
        px2rem({
            rootValue: 100, //根元素字体大小
            unitPrecision: 5,  //允许REM单位增长的十进制数
            propWhiteList: [], //可以从px更改为rem的属性
            propBlackList: [], //不应该从px更改为rem的属性
            exclude:false,   //排除某些文件夹  eg. /(node_module)/
            selectorBlackList: [], //忽略的选择器并保留为px
            ignoreIdentifier: false, //一种忽略单个属性的方法,启用ignoreIdentifier后，replace将自动设置为true
            replace: true,   //替换包含rems的规则，而不是添加回退
            mediaQuery: false, //允许在媒体查询中转换px
            minPixelValue: 0  //设置要替换的最小像素值
        })
    ]
});