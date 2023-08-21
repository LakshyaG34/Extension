import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import './style1.css'
interface IPInfoData {
    ip: string;
    city: string;
    country: string;
  }
  function UserInfo({ userIP }: { userIP: string }) {
    const [userData, setUserData] = useState<IPInfoData | null>(null);
    useEffect(() => {
        const IPINFO_TOKEN = process.env.REACT_APP_IPINFO_TOKEN;
        const apiUrl = `https://ipinfo.io/${userIP}?token=${IPINFO_TOKEN}`;
        
        fetch('https://ipinfo.io/122.15.204.67/json?token=b9f05b891fd77c')
          .then(response => response.json())
          .then(data => {
            setUserData(data);
          })
          .catch(error => {
            console.error('Error fetching country and city:', error);
          });
      }, [userIP]);
      return (
        <div className= "loading1">
        {userData ? (
          <Popup country={userData.country} city={userData.city} />
        ) : (
            <div className="bg-blue-500 text-red p-4"><p>Loading user data...</p></div>
          
        )}
      </div>
      );
  }
  export default UserInfo;