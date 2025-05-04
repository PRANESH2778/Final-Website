import React from "react";
import "./ServicePage.css";

import internationalTaxImage from "../../assets/internationalTaxImage.jpg"; // Replace with a relevant image if needed

const ForeignExchangeMatters = () => {
  const details = [
    "Assistance in Foreign Exchange Transactions",
    "Compliance with FEMA Regulations",
    "Advisory on Inward and Outward Remittances",
    "Liaison with RBI and Authorized Dealers",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img src={internationalTaxImage} alt="Foreign Exchange Matters" className="dtx-hero-image" />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">Foreign Exchange Matters</h1>
          <p className="dtx-description">
            We provide comprehensive services to help businesses and individuals
            navigate the complexities of foreign exchange regulations and ensure
            compliance with FEMA guidelines.
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

export default ForeignExchangeMatters;
