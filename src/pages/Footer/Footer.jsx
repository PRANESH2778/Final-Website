import React from 'react';
import './Footer.css';
// import { faFacebook, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaEnvelope, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Wave */}
      

      <div className="footer-content">
        {/* Company Info */}
        <div className="section">
          <h3 className="footer-title">Agrawal Bhaiya & Company</h3>
          <p>Your trusted partner in accounting, taxation, and financial advisory.</p>
        </div>

        {/* Quick Links */}
        {/* <div className="section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="links">
            <li><a href="/">Home</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contactus">Contact</a></li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div className="section">
          <h3 className="footer-title">Contact Us</h3>
          <p>📍 316 Homeland City, Opp.<br></br> Reliance Foundation School, Surat</p>
          <p className='clickable'>📞 0261-4531968</p>
          <p className='clickable'>📧 abandco.surat@gmail.com</p>
          <p className="fab fa-whatsapp"> <a href="https://wa.me/919586737879" target="_blank" rel="noopener noreferrer" >+91-95867-37879</a></p><br></br>
          <p className="fab fa-whatsapp"> <a href="https://wa.me/918012139016" target="_blank" rel="noopener noreferrer">+91-80121-39016</a></p>
        </div>
      </div>

      {/* Socials */}
      {/* <div className="socialMedia">
      <a href="https://facebook.com" className="footer-icon">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://twitter.com" className="footer-icon">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://linkedin.com" className="footer-icon">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div> */}
    <div className="socialMedia">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/919586737879" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>

      <div className="copyRight">
        <p>© {new Date().getFullYear()} Agrawal Bhaiya & Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
