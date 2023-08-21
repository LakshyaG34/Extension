import React from 'react';
import './style1.css'
const Button = ({onClick, label}) =>
{
    return <button className = "click" onClick={onClick}>Show my location</button>
};
export default Button;