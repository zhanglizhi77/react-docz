import React from 'react';
import './button.component.less';
const Button = (props)=>{
    const basicAttributes = {
        type:'default', //按钮类型
        iconClassName:'',  //是否有icon图标 传入字体图标样式名称
        disabled:false,  //按钮是否可用
        block:false, // 是否自适应父级宽度
        size:'big', //按钮大小
        shape:'square', //按钮形状
    }
    const {
        type,
        children,
        iconClassName,
        onClick,
        disabled,
        block,
        size,
        shape,
    } = Object.assign({},basicAttributes,props);
    const handleClick = () =>{
        if(!disabled){
            if(onClick && typeof onClick == 'function'){
                onClick();
            } 
        }
    }
    return (
        <button 
            className={
                `lz_button lz_button_${type} 
                 lz_button_${size} 
                 lz_button_${shape}
                 ${block ? 'lz_button_block' : ''} 
                 ${disabled ? 'lz_button_disabled' : ''}`
            }
            onClick={handleClick} >
            {iconClassName!='' ? <span className={`lz_icon ${iconClassName}`}></span> : null}
            <span className="lz_text">{children}</span>
        </button>
    );
}
export default Button;