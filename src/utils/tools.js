import { createHashHistory } from 'history';
//跳转路由
export const goUrl = (url)=>{
    if(!window.hashHistory){
        window.hashHistory = createHashHistory();
    }
    window.hashHistory.push(url);
}

// 计算字体大小
export const setFontSize = ()=>{
    (function (doc, win){ 
        const docEl = doc.documentElement, 
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = () =>{ 
                const clientWidth = docEl.clientWidth; 
                if (!clientWidth) return; 
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'; 
            }; 
            if (!doc.addEventListener) return; 
            win.addEventListener(resizeEvt, recalc, false); 
            doc.addEventListener('DOMContentLoaded', recalc, false); 
        })(document, window);
}



