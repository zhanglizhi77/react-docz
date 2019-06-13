import './static/css/index';
import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './router/router';
ReactDom.render(
    <AppRouter />,document.getElementById('root')
);