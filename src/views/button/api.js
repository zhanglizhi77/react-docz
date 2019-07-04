const apiList = [
    {
        attr:'type',
        desc:'设置按钮类型，可选值为default transparent gradient danger link或者不设',
        type:'string',
        default:'default'
    },
    {
        attr:'iconClassName',
        desc:'设置按钮的图标className',
        type:'string',
        default:'-'
    },
    {
        attr:'disabled',
        desc:'按钮失效状态',
        type:'boolean',
        default:'false'
    },
    {
        attr:'onClick',
        desc:'点击按钮时的回调',
        type:'function',
        default:'-'
    },
    {
        attr:'block',
        desc:'自适应父级宽度',
        type:'boolean',
        default:'false'
    },
    {
        attr:'size',
        desc:'设置按钮大小，可选值为 small big middle 或者不设',
        type:'string',
        default:'big'
    },
    {
        attr:'shape',
        desc:'设置按钮形状，可选值为 circle、 square 或者不设',
        type:'string',
        default:'square'
    },
]
export default apiList;