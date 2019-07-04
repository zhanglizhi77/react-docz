import {HashRouter,Switch,Redirect,Route} from 'react-router-dom';
import React from 'react';
import HelloComponent from './../views/hello/index';
import ButtonComponent from './../views/button/index';
import CaptchaPopupComponent from './../views/captchaPopup/index';
import App from './../views/app/index';
let AppRouter = ()=>{
    return (
        <HashRouter>
            <App>
                <Route path="/hello" component={HelloComponent} />
                <Route path="/button" component={ButtonComponent} />
                <Route path="/captchaPopup" component={CaptchaPopupComponent} />
                {/* <Redirect path="/" to={{pathname: '/hello'}} /> */}
            </App>               
        </HashRouter>
    );
} 
export default AppRouter;