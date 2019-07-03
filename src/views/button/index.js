import React,{Component} from 'react';
import Button from '../../components/Button/Button';
import { HOC } from './../../utils/tools';
import './button.less';
class ButtonComponent extends Component{
    showCode(){
        return (
            <code className="button_text_wrap">
                <p>{`<Button>default</Button>`}</p>
                <p>{`<Button iconClassName="iconfont icon_loading"}>default</Button>`}</p>
            </code>
        );
    }
    render(){
        return (
            <React.Fragment>
                <div className="button_wrap">
                    <p><Button>default</Button></p>
                    <p><Button iconClassName="iconfont icon_loading">default</Button></p>
                </div>
                {this.showCode()}
            </React.Fragment>
        );
    }
}
export default HOC(ButtonComponent);