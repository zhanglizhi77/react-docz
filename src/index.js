import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './router/router';
import {setFontSize} from './utils/tools';
import './static/css/index.less';
setFontSize();
ReactDom.render(
    <AppRouter />
    ,document.getElementById('root')
);