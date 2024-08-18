import React from 'react';
import './BenefitsSection.css';
import hindu  from './../images/hindu.jpg'; 
import muslim from './../images/muslim.jpg'; 

const BenefitsSection = () => {
  return (
    <div className="benefits-section">
      <h2>Unique benefits of using WedMonkey</h2>
      <div className="benefit-item">
        <img src={hindu} alt="Customizable Options" className="benefit-image"/>
        <div className="benefit-text">
          <h3>Customizable Options</h3>
          <p>We understand that every couple is unique, which is why we offer customization options to make your wedding invitation truly your own.</p>
        </div>
      </div>
      <div className="benefit-item">
        <img src={muslim} alt="Multi-Language Support" className="benefit-image"/>
        <div className="benefit-text">
          <h3>Multi-Language Support</h3>
          <p>We believe that every couple should have access to beautiful wedding invitations, which is why we offer our collection at affordable prices.</p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
