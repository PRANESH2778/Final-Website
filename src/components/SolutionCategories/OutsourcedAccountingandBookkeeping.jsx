import React from "react";
import './SeparateSolution.css';
import bookkeepingImage from "../../assets/bookKeeping.jpg"; // ✅ Assuming you have this image

const OutsourcedAccountingandBookkeeping = () => {
  const details = [
    "Bookkeeping (Tally, QuickBooks, Zoho, etc.)",
    "Payroll processing and TDS filings",
    "Reconciliations and monthly closing",
    "Preparation of financial statements"
  ];

  return (
    <div className="sol-cat-container">
      <div className="sol-cat-hero">
        <img src={bookkeepingImage} alt="Outsourced Accounting" className="sol-cat-hero-image" />
        <div className="sol-cat-hero-text">
          <h1 className="sol-cat-title">Outsourced Accounting & Bookkeeping</h1>
          <p className="sol-cat-description">
            Free up your time and resources by outsourcing your financial operations to experts.
            Our team provides accurate, timely, and compliant accounting services that scale with your business.
          </p>
        </div>
      </div>

      <div className="sol-cat-details-section">
        <h2 className="sol-cat-section-heading">Services include:</h2>
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

export default OutsourcedAccountingandBookkeeping;
