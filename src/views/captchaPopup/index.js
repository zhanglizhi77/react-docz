import React from 'react';
import captchaPopupList from './component';
import { HOC,generatedTab,createDom } from './../../utils/tools';
import apiList from './api';
class CaptchaPopupComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="content_desc_title">代码演示</div>
                <div className="button_wrap">
                    {
                        captchaPopupList.map((val,key)=>{
                            return createDom(val,key);
                        })
                    }   
                </div>
                {generatedTab(apiList)}
            </React.Fragment>
        )
    }
}

export default HOC(CaptchaPopupComponent);