import React from 'react';
import PropTypes from 'prop-types';
import './button.component.less';
const Button = (props)=>{
    const {
        type,
        children,
        iconClassName,
        onClick,
        disabled,
        block,
        size,
        shape,
    } = props;
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
/**
 * type           按钮类型
 * iconClassName  是否有icon图标 传入字体图标样式名称
 * disabled       按钮是否可用
 * block          是否自适应父级宽度
 * size           按钮大小
 * shape          按钮形状 
 * */  
Button.propTypes = {
    type:PropTypes.string,
    iconClassName:PropTypes.string, 
    disabled:PropTypes.bool, 
    block:PropTypes.bool,
    size:PropTypes.string,
    shape:PropTypes.string,
};
Button.defaultProps = {
    type:'default', 
    iconClassName:'',
    disabled:false,
    block:false,
    size:'big',
    shape:'square',
};
export default Button;