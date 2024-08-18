// src/Components/WhatsAppButton/WhatsAppButton.js

import React from 'react';
import './WhatsAppButton.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = "918302201800"; 
    const message = "Hello, I need help with..."; 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-button-container">
      <button className="whatsapp-button" onClick={redirectToWhatsApp} aria-label="Contact us on WhatsApp">
        <FaWhatsapp size={40} />
      </button>
    </div>
  );
};

export default WhatsAppButton;
