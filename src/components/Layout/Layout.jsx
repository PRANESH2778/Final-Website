import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import "./Layout.css"; // Import the CSS file for styling

const Layout = () => {
  const navigate = useNavigate();

  const handlePhoneClick = () => {
    navigate("/contactus"); // Navigate to the Contact Us page
  };

  return (
    <div>
      {/* Main Content */}
      <Outlet />

      {/* Floating Icons Container */}
      <div className="floating-icons-container">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/919586737879" // Replace 'your-number' with your actual number
          className="floating-icon whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp size={20} color="white" />
        </a>

        {/* Phone Icon */}
        <div
          className="floating-icon contact-icon"
          onClick={handlePhoneClick}
          aria-label="Contact Us"
        >
          <FiPhone size={20} color="white" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
