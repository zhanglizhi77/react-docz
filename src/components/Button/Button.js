import React from 'react';
import './button.component.less';
const Button = (props)=>{
    const basicAttributes = {
        type:'default', //按钮类型
        iconClassName:'',  //是否有icon图标 传入字体图标样式名称
    }
    const {
        type,
        children,
        iconClassName,
        onClick,
    } = Object.assign({},basicAttributes,props);

    return (
        <button 
            className={`lz_button lz_button_${type}`}
            onClick={onClick} >
            {iconClassName!='' ? <span className={`lz_icon ${iconClassName}`}></span> : null}
            <span className="lz_text">{children}</span>
        </button>
    );
}
export default Button;