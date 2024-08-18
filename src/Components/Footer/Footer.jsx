import React, { useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    // Create a link element for Font Awesome
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    
    // Append the link element to the document head
    document.head.appendChild(link);
    
    // Cleanup function to remove the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#"><i className="fas fa-info-circle"></i> About Us</a></li>
            <li><a href="#"><i className="fas fa-envelope"></i> Contact</a></li>
            <li><a href="#"><i className="fas fa-shield-alt"></i> Privacy Policy</a></li>
            <li><a href="#"><i className="fas fa-file-contract"></i> Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><a href="#"><i className="fas fa-video"></i> Video Invitation</a></li>
            <li><a href="#"><i className="fas fa-file-lines"></i> Image Invitation</a></li>
            <li><a href="#"><i className="fas fa-handshake"></i> Greeting</a></li>
            <li><a href="#"><i className="fas fa-record-vinyl"></i> Photography</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" target="_blank" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="newsletter">
            <h4>Subscribe to Our Newsletter</h4>
            <form>
              <input type="email" placeholder="Your Email" aria-label="Email for newsletter"/>
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 WedMonkey. All rights reserved.</p>
        <a href="#" className="back-to-top" aria-label="Back to top"><i className="fas fa-chevron-up"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
