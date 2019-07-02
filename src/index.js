import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './router/router';
import Nav from './views/nav/index';
import {setFontSize} from './utils/tools';
import './static/css/index.less';
setFontSize();
ReactDom.render(
    <React.Fragment>
        <Nav isShow={true}/>
        <div className="content">
            <AppRouter />
        </div>
    </React.Fragment>
    ,document.getElementById('root')
);