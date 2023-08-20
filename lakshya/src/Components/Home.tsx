import React, { useState, useEffect } from 'react';
import UserInfo from './UserInfo';

function Home() {
  const [userIP, setUserIP] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api64.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        setUserIP(data.ip);
      })
      .catch(error => {
        console.error('Error fetching IP address:', error);
      });
  }, []);

  return (
    <div>
      {userIP ? (
        <UserInfo userIP={userIP} />
      ) : (
        <p>Loading IP address...</p>
      )}
    </div>
  );
}

export default Home;