const apiList = [
    {
        attr:'type',
        desc:'设置input类型，可选值为text number或者不设',
        type:'string',
        default:'text'
    },
    {
        attr:'digits',
        desc:'设置input的个数',
        type:'number',
        default:'6'
    },
    {
        attr:'focus',
        desc:'input是否触发焦点',
        type:'boolean',
        default:'false'
    },
    {
        attr:'autoSubmit',
        desc:'是否填写完成自动提交',
        type:'boolean',
        default:'false'
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