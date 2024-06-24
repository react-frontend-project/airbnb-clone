import React from 'react';
import './Footer.css';
import { FaFacebook, FaGlobe, FaInstagram, FaRupeeSign, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <hr></hr>
        <div className="footer-links">
          <ul>
            <li><a href="#">. Privacy</a></li>
            <li><a href="#">. Terms</a></li>
            <li><a href="#">. Sitemap</a></li>
            <li><a href="#">. Company details</a></li>
          </ul>
          <p className="copyright">© 2024 Airbnb, Inc.</p>
        </div>
        <div className="footer-social">
          <button className="language-button">
            <span className="globe-icon">
            <FaGlobe ></FaGlobe>
            </span>
            English (IN)
          </button>
          <button className="currency-button">
            <span className="rupee-icon">
                <FaRupeeSign></FaRupeeSign>
            </span>
            INR
          </button>
          <a href="#" className="social-link">
            <span className="facebook-icon">
                <FaFacebook></FaFacebook>
            </span>
          </a>
          <a href="#" className="social-link">
            <span className="twitter-icon">
                <FaTwitter></FaTwitter>
            </span>
          </a>
          <a href="#" className="social-link">
            <span className="instagram-icon">
                <FaInstagram></FaInstagram>
            </span>
          </a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;