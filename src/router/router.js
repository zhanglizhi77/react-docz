import {HashRouter,Switch,Route} from 'react-router-dom';
import React,{Component} from 'react';
import Hello from './../views/hello/hello';
let AppRouter = ()=>{
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={Hello} />
            </Switch>
        </HashRouter>
    );
} 
export default AppRouter;