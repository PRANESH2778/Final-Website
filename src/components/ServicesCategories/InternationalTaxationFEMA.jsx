import React from "react";
import "./ServicePage.css";

import internationalTaxImage from "../../assets/internationalTaxImage.jpg"; // Make sure the path is correct

const InternationalTaxationFEMA = () => {
  const details = [
    "Cross Border Tax Advisory",
    "DTAA Advisory",
    "FEMA Compliances",
    "Foreign Subsidiary Setup & Compliances",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img
          src={internationalTaxImage}
          alt="International Taxation & FEMA"
          className="dtx-hero-image"
        />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">International Taxation & FEMA</h1>
          <p className="dtx-description">
            We specialize in International Taxation and FEMA compliance to help
            businesses navigate cross-border taxation and regulatory requirements.
            Our expert solutions ensure compliance and optimized strategies for
            global operations.
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

export default InternationalTaxationFEMA;
