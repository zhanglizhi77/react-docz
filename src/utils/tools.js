import { createHashHistory } from 'history';
import React from 'react'; 
import Head from './../views/head/index';
/**
 * 跳转路由 
 * @param {跳转路由} url 
 * @param {跳转需要传递的连接参数} params 
 */
export const goUrl = (url,params={})=>{
    if(!window.hashHistory){
        window.hashHistory = createHashHistory();
    }
    window.hashHistory.push({
        pathname:url,
        query:params
    });
}

/**
 * 计算字体大小
 */
export const setFontSize = ()=>{
    (function (doc, win){ 
        const docEl = doc.documentElement, 
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = () =>{ 
                const clientWidth = docEl.clientWidth; 
                if (!clientWidth) return; 
                if(clientWidth > 750){
                    docEl.style.fontSize = '100px';
                }else if(clientWidth < 320){
                    docEl.style.fontSize = '42px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; 
                } 
            }; 
            if (!doc.addEventListener) return; 
            win.addEventListener(resizeEvt, recalc, false); 
            doc.addEventListener('DOMContentLoaded', recalc, false); 
        })(document, window);
}

/**
 * 组件嵌套head部分
 * @param {组件名称} WrapperComponent 
 */
export const HOC = (WrapperComponent) => {
    return class Permission extends React.Component{
        render(){
            return (
            <React.Fragment>
                <Head title={this.props.match.path}></Head>
                <WrapperComponent {...this.props}/>
            </React.Fragment>
            )
        }
    }
}





