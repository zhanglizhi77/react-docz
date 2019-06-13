import {BrowserRouter,Router,Switch} from 'react-router-dom';
import React,{Component} from 'react';
import Hello from './../views/hello/hello';
class AppRouter extends Component{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Router exact path="/hello" component={Hello}></Router>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default AppRouter;