import React from "react";

import {
  FaBuilding,
  FaLightbulb,
  FaUsers,
  FaBalanceScale,
  FaChartLine,
  FaIndustry
} from "react-icons/fa";

import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./SolutionsOffer.css";

const SolutionsOffer = () => {
  const navigate = useNavigate();

  const solutions = [
    {
      title: "Internal Audit & MIS Reporting",
      path: "/InternalAuditandMISReporting",
      description:
        "We specialize in conducting comprehensive internal audits that go beyond compliance. Our audits help you identify operational inefficiencies, strengthen internal controls, and improve financial transparency.",
      icon: <FaBuilding size={60} color="#28a745" />, // Still fits well
    },
    {
      title: "Outsourced Accounting & Bookkeeping",
      path:"/OutsourcedAccountingandBookkeeping",
      description:
        "Free up your time and resources by outsourcing your financial operations to experts. Our team provides accurate, timely, and compliant accounting services that scale with your business.",
      icon: <FaLightbulb size={60} color="#ffc107" />, // Symbolic for smart solutions
    },
    {
      title: "Indirect Tax Advisory & Litigation Support",
      path:"/IndirectTaxAdvisoryandLitigationSupport",
      description:
        "Navigating the complex landscape of GST and other indirect taxes can be challenging. We assist businesses with advisory, compliance, and litigation support to reduce risks and ensure peace of mind.",
      icon: <FaBalanceScale size={60} color="#dc3545" />, // ⚖️ Represents law & tax
    },
    {
      title: "Data Analysis & Business Insights",
      path:"DataAnalysisandBusinessInsights",
      description:
        "Turn raw data into strategic decisions. We help businesses track KPIs, spot trends, and optimize operations through advanced data analytics.",
      icon: <FaChartLine size={60} color="#17a2b8" />, // 📈 for data & insights
    },
    {
      title: "Industry-Specific Advisory & Compliance Solutions",
      path:"IndustrySpecificAdvisoryandComplianceSolutions",
      description:
        "From manufacturing to services, we understand the unique challenges each industry faces. Our cross-sector experience allows us to deliver tailored solutions that fit your operational realities.",
      icon: <FaIndustry size={60} color="#6f42c1" />, // 🏭 for industry-specific work
    },
  ];
  

  return (
    <div className="solutionOffer-container">
      <h1 className="solutionPage-title">SOLUTIONS WE OFFER</h1>
      <p className="solutionOffer-subtitle">
        We offer a number of solutions to meet the needs of our clients such as captive centers, young entrepreneur services, and next-generation family businesses.
      </p>
      <div className="solutionOffer-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solutionOffer-card" onClick={() => navigate(solution.path)}
          style={{ cursor: "pointer" }}>
            <div className="solutionOffer-icon">{solution.icon}</div>
            <h3 className="solutionOffer-title">{solution.title}</h3>
            <p className="solutionOffer-description">{solution.description}</p>
          </div>
        ))}
      </div>
      <div className="know-more-container">
        <button
          className="know-more-button"
          onClick={() => navigate("/solutions")}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default SolutionsOffer;
