import React from "react";
import {goUrl} from './../../utils/tools';
import "./nav.less";

const Nav = (props)=>{
    const {isShow} = props;
    return isShow ?(
        <div className="nav">
            <div className="nav_head">
                <h1 onClick={goUrl.bind(this,'/hello')}>组件库</h1>
            </div>
            <ul>
                <li onClick={goUrl.bind(this,'/button')}>Button</li>
            </ul>            
        </div>
    ) : null;
}

export default Nav;