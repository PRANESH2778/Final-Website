import React from "react";
import './SeparateSolution.css';
import complianceSolutionImage from "../../assets/complianceSolution.jpg"; // ✅ Assuming you have an image

const IndustrySpecificAdvisoryandComplianceSolutions = () => {
  const details = [
    "Manufacturing",
    "Trading and distribution",
    "Service sectors (IT, consultancy, etc.)",
    "MSME advisory and regulatory compliance"
  ];

  return (
    <div className="sol-cat-container">
      <div className="sol-cat-hero">
        <img src={complianceSolutionImage} alt="Industry Specific" className="sol-cat-hero-image" />
        <div className="sol-cat-hero-text">
          <h1 className="sol-cat-title">Industry-Specific Advisory & Compliance Solutions</h1>
          <p className="sol-cat-description">
            From manufacturing to services, we understand the unique challenges each industry faces.
            Our cross-sector experience allows us to deliver tailored solutions that fit your operational realities.
          </p>
        </div>
      </div>

      <div className="sol-cat-details-section">
        <h2 className="sol-cat-section-heading">Expertise across:</h2>
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

export default IndustrySpecificAdvisoryandComplianceSolutions;
