import React,{Component} from 'react';
import buttonList from './component';
import { HOC,generatedTab,createDom } from './../../utils/tools';
import apiList from './api';
import './button.less';
class ButtonComponent extends Component{
    render(){
        return (
            <React.Fragment>
                <div className="content_desc_title">代码演示</div>
                <div className="button_wrap">
                    {
                        buttonList.map((val,key)=>{
                            return createDom(val,key);
                        })
                    }   
                </div>
                {generatedTab(apiList)}
            </React.Fragment>
        );
    }
}
export default HOC(ButtonComponent);