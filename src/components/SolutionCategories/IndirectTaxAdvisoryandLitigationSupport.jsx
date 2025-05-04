import React from "react";
import './SeparateSolution.css';
import taxAdvisoryImage from "../../assets/taxAdvisory.jpg"; // ✅ Assuming you have an image

const IndirectTaxAdvisoryandLitigationSupport = () => {
  const details = [
    "GST health checks and reconciliations",
    "Response drafting to notices and summons",
    "Representation before authorities",
    "Advisory on classification, ITC eligibility, and RCM"
  ];

  return (
    <div className="sol-cat-container">
      <div className="sol-cat-hero">
        <img src={taxAdvisoryImage} alt="Indirect Tax" className="sol-cat-hero-image" />
        <div className="sol-cat-hero-text">
          <h1 className="sol-cat-title">Indirect Tax Advisory & Litigation Support</h1>
          <p className="sol-cat-description">
            Navigating the complex landscape of GST and other indirect taxes can be challenging.
            We assist businesses with advisory, compliance, and litigation support to reduce risks and ensure peace of mind.
          </p>
        </div>
      </div>

      <div className="sol-cat-details-section">
        <h2 className="sol-cat-section-heading">Our focus areas:</h2>
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

export default IndirectTaxAdvisoryandLitigationSupport;
