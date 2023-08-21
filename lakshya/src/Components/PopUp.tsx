import React from 'react';
import './style.css'
function Popup({ country, city }: { country: string; city: string }) {
    const popupText = `Your country is ${country} and city is ${city}`;
  
    return (
      <div>
        <p className="text-white">{popupText}</p>
      </div>
    );
  }
  export default Popup;