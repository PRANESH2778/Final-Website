import React from "react";
import "./ServicePage.css";

import startupImage from "../../assets/startupImage.jpg"; // Make sure the path is correct

const StartupSMEServices = () => {
  const details = [
    "Startup Incorporation (Company, LLP, Proprietorship)",
    "Funding & Investor Relations Support",
    "Government Scheme Guidance (MSME, Startup India)",
    "Compliance Management",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img src={startupImage} alt="Startup & SME Services" className="dtx-hero-image" />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">Startup & SME Services</h1>
          <p className="dtx-description">
            Our Startup & SME Services are designed to support emerging businesses
            and small enterprises with tailored solutions. From incorporation to
            compliance, we provide comprehensive assistance to help startups thrive.
          </p>
        </div>
      </div>

      <div className="dtx-details-section">
        <h2 className="dtx-section-heading">Our Offerings:</h2>
        <ul className="dtx-list">
          {details.map((detail, index) => (
            <li key={index} className="dtx-list-item">
              <span className="dtx-tick">✔️</span> {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StartupSMEServices;
