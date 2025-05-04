import React from "react";
import "./ServicePage.css";

import accountingImage from "../../assets/accountingImage.jpg"; // Make sure the path is correct

const AccountingBookkeeping = () => {
  const details = [
    "Outsourced Accounting",
    "Cloud Accounting Solutions (QuickBooks, Xero)",
    "Financial Statement Preparation",
    "MIS Reporting",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img src={accountingImage} alt="Accounting & Bookkeeping" className="dtx-hero-image" />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">Accounting & Bookkeeping</h1>
          <p className="dtx-description">
            We offer end-to-end accounting and bookkeeping services to help
            businesses maintain accurate financial records.
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

export default AccountingBookkeeping;
