// src/Components/HelpCenter/HelpCenter.js

import React from 'react';
import './HelpCenter.css';

const HelpCenter = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = "918302201800"; 
    const message = "Hello, I need help with something on the website ";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="help-center">
      <h1>Need Help?</h1>
      <p>If you have any questions or need assistance, feel free to contact us on WhatsApp!</p>
      <button className="whatsapp-button-1" onClick={redirectToWhatsApp}>
        Contact Us on WhatsApp
      </button>
    </div>
  );
};

export default HelpCenter;
