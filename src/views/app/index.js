import React,{Component} from 'react';
import Nav from './../nav/index';
import './../../static/css/index.less';
class App extends Component{
    render(){
        return (
            <React.Fragment>
                <Nav />
                <div className="content">
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}
export default App;