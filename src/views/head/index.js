import React from 'react';
const Head = (props)=>{
    const {title} = props;
    const getTitle = ()=> {
        return title.split('/')[1];
    }
    return <h1 className="head">{getTitle()+' 组件说明'}</h1>;
}
export default Head;