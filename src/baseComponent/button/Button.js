import React from 'react';
import PropTypes from 'prop-types';
 const Button = (props) => {
     const {name} = props;
     return (
         <button>{name}</button>
     );
 }
 Button.propTypes = {
    name:PropTypes.String
 }
 Button.defaultProps = {
     name:'click me'
 }
 export default Button;