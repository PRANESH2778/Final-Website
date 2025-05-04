import React from "react";
import './SeparateSolution.css';
import reportingImage from "../../assets/reporting.jpg"; // ✅ Assuming you have this image

const InternalAuditandMISReporting = () => {
  const details = [
    "Detailed audit reports",
    "Industry-specific process review",
    "MIS dashboards for decision-making",
    "Actionable insights to enhance performance"
  ];

  return (
    <div className="sol-cat-container">
      <div className="sol-cat-hero">
        <img src={reportingImage} alt="Internal Audit" className="sol-cat-hero-image" />
        <div className="sol-cat-hero-text">
          <h1 className="sol-cat-title">Internal Audit & MIS Reporting</h1>
          <p className="sol-cat-description">
            We specialize in conducting comprehensive internal audits that go beyond compliance.
            Our audits help you identify operational inefficiencies, strengthen internal controls,
            and improve financial transparency.
          </p>
        </div>
      </div>

      <div className="sol-cat-details-section">
        <h2 className="sol-cat-section-heading">Deliverables include:</h2>
        <ul className="sol-cat-list">
          {details.map((detail, index) => (
            <li key={index} className="sol-cat-list-item">
              <span className="sol-cat-tick">✔️</span> {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InternalAuditandMISReporting;
