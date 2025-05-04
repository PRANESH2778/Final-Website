import React from "react";
import "./ServicePage.css";

import directTaxImage from "../../assets/directTaxImage.jpg"; // make sure path is correct

const DirectTaxation = () => {
  const details = [
    "Income Tax Return Filing",
    "Tax Advisory & Planning",
    "Tax Audits",
    "Representation before Tax Authorities",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img src={directTaxImage} alt="Direct Taxation" className="dtx-hero-image" />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">Direct Taxation</h1>
          <p className="dtx-description">
            Our expertise in direct taxation helps businesses and individuals
            navigate complex tax laws efficiently. We provide solutions to ensure
            compliance and tax optimization.
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

export default DirectTaxation;
