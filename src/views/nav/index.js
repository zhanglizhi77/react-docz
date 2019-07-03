import React from "react";
import {goUrl} from './../../utils/tools';
import "./nav.less";

class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navList:[{
                name:'Button',
                isActive:false
            }]
        }
        this.toHello = this.toHello.bind(this);
    }
    addHighLight(index){
        const navList = this.state.navList;
        navList.map((val,key)=>{
            if(key == index){
                navList[index].isActive = true;
            }else{
                val.isActive = true;
            }
        });    
        this.setState({navList});
        const urlName = navList[index].name;
        const url = urlName.replace(urlName[0],urlName[0].toLowerCase());
        goUrl('/'+url);
    }
    toHello(){
        const navList = this.state.navList;
        navList.map((val)=>{
            val.isActive = false;
        });
        this.setState({navList});  
        goUrl.bind(this,'/hello')
    }
    render(){
        const {navList} = this.state;
        return (
            <div className="nav">
                <div className="nav_head">
                    <h1 onClick={this.toHello}>组件库</h1>
                </div>
                <ul>
                    {navList.map((val,key)=>{
                        return <li className={val.isActive?'active':''} key={key} onClick={this.addHighLight.bind(this,key)}>{val.name}</li>
                    })}     
                </ul>            
            </div>
        );
    }   
}

export default Nav;