import React from "react";
import "./ServicePage.css";

import auditImage from "../../assets/auditImage.jpg"; // Make sure the path is correct

const AuditAssurance = () => {
  const details = [
    "Statutory Audits",
    "Internal Audits",
    "Forensic Audits",
    "Stock Audits",
  ];

  return (
    <div className="dtx-page-container">
      <div className="dtx-hero">
        <img src={auditImage} alt="Audit & Assurance" className="dtx-hero-image" />
        <div className="dtx-hero-text">
          <h1 className="dtx-title">Audit & Assurance</h1>
          <p className="dtx-description">
            We conduct various types of audits to ensure your business complies
            with statutory and internal requirements.
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

export default AuditAssurance;
