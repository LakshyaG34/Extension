import React from 'react';
function Popup({ country, city }: { country: string; city: string }) {
    const popupText = `Your country is ${country} and city is ${city}`;
  
    return (
      <div>
        <p className="text-red">{popupText}</p>
      </div>
    );
  }
  export default Popup;