import React from "react";
import "./ServicePage.css";

import gstImage from "../../assets/gstImage.jpg"; // Make sure the path is correct

const GSTIndirectTaxes = () => {
  const details = [
    "GST Registration & Compliance",
    "GST Returns Filing & Audits",
    "Advisory on Input Tax Credit (ITC)",
    "GST Health Check & Litigation Support",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img src={gstImage} alt="GST & Indirect Taxes" className="dtx-hero-image" />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">GST & Indirect Taxes</h1>
          <p className="dtx-description">
            We provide comprehensive GST and indirect tax services to ensure
            compliance and maximize input tax credits.
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

export default GSTIndirectTaxes;
