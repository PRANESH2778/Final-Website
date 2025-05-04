import React from "react";
import "./ServicePage.css";

import advisoryImage from "../../assets/advisoryImage.jpg"; // Make sure the path is correct

const BusinessAdvisory = () => {
  const details = [
    "Business Structuring & Restructuring",
    "Due Diligence",
    "Financial Modelling",
    "Cash Flow & Budgeting Advisory",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img src={advisoryImage} alt="Business Advisory" className="dtx-hero-image" />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">Business Advisory</h1>
          <p className="dtx-description">
            Our Business Advisory services provide strategic solutions to help
            businesses achieve growth and operational excellence. We specialize in
            offering guidance for structural changes, financial improvements, and
            long-term sustainability.
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

export default BusinessAdvisory;
