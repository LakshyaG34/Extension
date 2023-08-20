import React, { useState, useEffect } from 'react';
import UserInfo from './Components/Userinfo';

import './style.css'
import Button from '~Components/Button';
function IndexPopup ()  {
  
const [userIP, setUserIP] = useState<string | null>(null);
  const handleClick = () => {
    fetch('https://ipinfo.io/122.15.204.67/json?token=b9f05b891fd77c')
      .then(response => response.json())
      .then(data => {
        setUserIP(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }
  // useEffect(() => {
  //   fetch('https://ipinfo.io/122.15.204.67/json?token=b9f05b891fd77c')
  //     .then(response => response.json())
  //     .then(data => {
  //       setUserIP(data.ip);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching IP address:', error);
  //     });
  // }, []);

  return ( 
    <div className = "Loading"
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: 500,
        height: 500

      }}>
    {userIP ? (
      <UserInfo userIP={userIP} />
    ) : (
      <p className="loading">Loading IP address...</p>
    )}
    <Button onClick={handleClick} label = "click me"/>
  </div>
    );
}
export default IndexPopup;