import React from 'react';
// import './style1.css'
const Button = ({onClick, label}) =>
{
    return <button className ="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 outline outline-offset-0 outline-pink-500 w-40 item-center self-center" onClick={onClick}>Show my location</button>
};
export default Button;