import React from "react";
import PropTypes from 'prop-types';
import exp from './../../utils/exp';
import './captchaPopup.component.less'
class CaptchaPopup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            codeList:[]
        }
        this.inputList=[];
        this.setCodeList = this.setCodeList.bind(this);
        this.getGrid = this.getGrid.bind(this);
    }
    componentWillMount(){
        this.setCodeList();
    }
    componentDidMount(){
        //是否进去直接触发焦点
        if(this.props.focus){
            this.setFocus(0);
        }
    }
    _setState(list=this.state.codeList){
        this.setState({
            codeList:list
        });
    }
    //设置输入框的初始值
    setCodeList(){
        const {
            digits,
            focus,
        } = this.props,
        list = [];
        for(let i= 0; i < digits; i++){           
            list.push({
                isFocus:(focus&&i==0)?true:false,
                value:''
            });
            this.inputList[i] = React.createRef();
        }
        this._setState(list);
    }
     //setstate codeList isFocus
     changeCodeFocus(index){
        this.state.codeList.map((val,key)=>{
            if(key == index){
                val.isFocus = true;
            }else{
                val.isFocus = false;
            }
        });
        
        this._setState();
    }
    changeCodeValue(index,value){
        this.state.codeList[index].value = value;
        this._setState();
    }
    //创建编辑框
    getGrid(){
        const {codeList} = this.state,
            list = [],
            {
                digits,
            } = this.props;
        for(let i = 0; i < digits; i++){         
            list.push(
                <div key={i}
                    className={`lz_popup_grid ${codeList[i].isFocus?'lz_popup_grid_focus':''} ${codeList[i].value!=''?'lz_popup_grid_value':''}`}
                    onClick={this.setFocus.bind(this,i)}>
                        <span>{codeList[i].value}</span>
                        <input maxLength="1"
                            type="text"
                            ref={this.inputList[i]}
                            onFocus={this.onFocus.bind(this,i)}
                            onBlur={this.onBlur.bind(this,i)}
                            onKeyUp={this.onKeyUp.bind(this,i)}
                            onKeyDown={this.onKeyDown.bind(this,i)}
                            onChange={this.onChange.bind(this,i)}
                            value={codeList[i].value} />
                </div>
            );
        }
        return list;
    }
    //触发焦点
    setFocus(index){
        this.changeCodeFocus(index);
        //判断前面是否还有未输入的input框
        if(index >= this.props.digits){
            let {codeList} = this.state;
            for(let i = 0; i < codeList.length; i++){
                if(codeList[i].value == ''){
                    codeList[i].isFocus = true;
                    this.inputList[i].current.focus();
                    break;
                }
            }
            this._setState();
        }else{
            this.inputList[index].current.focus();
        }     
    }
    //鼠标事件
    onKeyUp(index){
        if(event.keyCode == 8){
            this.changeCodeValue(index,'');
        }else{
            this.setFocus(index + 1);
        }
    }
    onKeyDown(index){
        if(event.keyCode == 8 && this.state.codeList[index].value == ''){
            if(index <= 0){
                this.setFocus(0);
            }else{
                this.setFocus(index - 1);
            }

        }
    }
    onFocus(index){
        this.changeCodeFocus(index);
    }
    onBlur(){
        this.changeCodeFocus();
    }
    onChange(index){
        const target = event.target,
            {type} = this.props;
        if(type == 'number'){
            let reg = exp.num;
            if(!reg.test(target.value)){
                this.state.codeList[index].value = event.target.value.replace(exp.notNumber,'');
                return ;
            }
        }
        if(type == 'text'){
            let reg = exp.numberAndLetter;
            if(!reg.test(target.value)){
                this.state.codeList[index].value = event.target.value.replace(exp.notNumberAndLetter,'');
                return ;
            }
        }
        this.changeCodeValue(index,target.value.substr(0,1));
        
    }
    render(){
        return (
            <div  className="lz_popup">
                {this.getGrid()}
            </div>
        );
    }
    
}
/**
 * digits:                   验证码位数
 * type:                     输入框类型
 * isFocus:                  是否自动触发焦点
 * isAutoSubmit:             是否填写完成自动提交
 */
CaptchaPopup.propTypes = {
    digits:PropTypes.number,
    type:PropTypes.string,
    focus:PropTypes.bool,
    autoSubmit:PropTypes.bool,
    popupKeyboard:PropTypes.bool,
    callback:PropTypes.func,
}
CaptchaPopup.defaultProps = {
    digits:6,
    type:'text',
    focus:false,
    autoSubmit:false,
    popupKeyboard:false,
    callback:null
}
export default CaptchaPopup;