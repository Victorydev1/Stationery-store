import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={footer_logo} alt="Store Logo" />
          <p>STORE</p>
        </div>

        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
          <div className="footer-icon">
            <img src={instagram_icon} alt="Instagram" />
          </div>
          <div className="footer-icon">
            <img src={whatsapp_icon} alt="WhatsApp" />
          </div>
          <div className="footer-icon">
            <img src={pintester_icon} alt="Pinterest" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <hr />
        <p>© 2025 STORE. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
