const exp = {
    number:/^[0-9]+$/,   //匹配数字
    numberAndLetter:/^[0-9a-zA-Z]+$/,    //匹配数字字母
    notNumber:/[^\d]/g,  //非数字的值
    notNumberAndLetter:/[\W]/g //非数字和字母
 
}
export default exp;