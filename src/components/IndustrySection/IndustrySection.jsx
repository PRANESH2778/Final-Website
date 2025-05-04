import React from "react";
import {
  FaExchangeAlt,     // Trading & Commodity
  FaTshirt,           // Textile & Process
  FaIndustry,         // Manufacturing
  FaTruckLoading,     // Logistics & Supply Chain
  FaRocket            // Startups
} from "react-icons/fa";

import "./IndustrySection.css";

const IndustrySection = () => {
  return (
    <section className="industry-section">
      <h2>Industries We Audit</h2>
      <p>
        Our comprehensive auditing solutions cater to diverse industries, ensuring
        compliance, transparency, and financial accuracy.
      </p>
      <div className="industry-grid">
        <div className="industry-card">
          <FaExchangeAlt size={60} color="#007BFF" />
          <h3>Trading & Commodity Businesses</h3>
          <p>Streamlined audit processes tailored for dynamic trading environments.</p>
        </div>
        <div className="industry-card">
          <FaTshirt size={60} color="#28A745" />
          <h3>Textile & Process Industries</h3>
          <p>Audits designed for precision and efficiency in production sectors.</p>
        </div>
        <div className="industry-card">
          <FaIndustry size={60} color="#FFC107" />
          <h3>Manufacturing & Industrial Units</h3>
          <p>Operational audits to enhance productivity and regulatory alignment.</p>
        </div>
        <div className="industry-card">
          <FaTruckLoading size={60} color="#FF5722" />
          <h3>Logistics, Warehousing & Supply Chain</h3>
          <p>Ensuring seamless flow, compliance, and accountability in logistics.</p>
        </div>
        <div className="industry-card">
          <FaRocket size={60} color="#6f42c1" />
          <h3>Startups & Emerging Businesses</h3>
          <p>Scalable audit solutions for growing and innovative enterprises.</p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
