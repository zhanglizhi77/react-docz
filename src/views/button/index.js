import React,{Component} from 'react';
import Button from '../../components/Button/Button';
class ButtonComponent extends Component{
    render(){
        return <Button onClick={()=>{
            alert('primary');
        }}>primary</Button>
        
    }
}
export default ButtonComponent;