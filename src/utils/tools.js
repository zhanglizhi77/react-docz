import { createHashHistory } from 'history';
import React from 'react'; 
import Head from './../views/head/index';
/**
 * 跳转路由 
 * @param {跳转路由} url 
 * @param {跳转需要传递的连接参数} params 
 */
const goUrl = (url,params={})=>{
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
const setFontSize = ()=>{
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
const HOC = (WrapperComponent) => {
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
/**
 * 展示组件API
 * @param {apilist} list 
 */
const generatedTab = (list)=>{
    return (
        <div>
            <p className="content_desc_title">API</p>
            <table className="api_tab">
                <thead>
                    <tr>
                        <th>属性</th>
                        <th>说明</th>
                        <th>类型</th>
                        <th>默认值</th>
                    </tr>
                </thead>
                <tbody>
                {list.map((val,key)=>{
                    return (<tr key={key}>
                        <td>{val.attr}</td>
                        <td>{val.desc}</td>
                        <td>{val.type}</td>
                        <td>{val.default}</td>
                    </tr>);
                })}
                </tbody>
            </table>
        </div>
    );
}

const createDom = (component,key)=>{
    return (
        <div key={key}>
            <div>{component.tem}</div>
            <code className="button_text_wrap">
                <p>{component.code}</p>
            </code>
        </div>
    );
}

export {
    goUrl,
    setFontSize,
    HOC,
    generatedTab,
    createDom
}





