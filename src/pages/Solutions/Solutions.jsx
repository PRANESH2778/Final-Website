import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBuilding,
  FaLightbulb,
  FaUsers,
  FaBalanceScale,
  FaChartLine,
  FaIndustry
} from "react-icons/fa";
import reportingImage from "../../assets/reporting.jpg";
import bookkeepingImage from "../../assets/bookKeeping.jpg";
import complianceSolutionImage from "../../assets/complianceSolution.jpg";
import dataAnalysisImage from "../../assets/dataAnalysis.jpg";
import taxAdvisoryImage from "../../assets/taxAdvisory.jpg";
import "./Solutions.css";

const Solutions = () => {
  const navigate = useNavigate();
  const solutionsData = [
    {
      title: "Internal Audit & MIS Reporting",
      description:
        "We specialize in conducting comprehensive internal audits that go beyond compliance. Our audits help you identify operational inefficiencies, strengthen internal controls, and improve financial transparency.",
      image: reportingImage,
      icon: <FaBalanceScale />,
      details: [
        "Operational Efficiency Review",
        "Financial Transparency Check",
        "Risk Management",
        "Compliance Enhancement"
      ],
    },
    {
      title: "Outsourced Accounting & Bookkeeping",
      description:
        "Free up your time and resources by outsourcing your financial operations to experts. Our team provides accurate, timely, and compliant accounting services that scale with your business.",
      image: bookkeepingImage,
      icon: <FaBuilding />,
      details: [
        "Cloud Accounting Setup",
        "Financial Statement Preparation",
        "Tax Filing Support",
        "Compliance Monitoring"
      ],
    },
    {
      title: "Indirect Tax Advisory & Litigation Support",
      description:
        "Navigating the complex landscape of GST and other indirect taxes can be challenging. We assist businesses with advisory, compliance, and litigation support to reduce risks and ensure peace of mind.",
      image: taxAdvisoryImage,
      icon: <FaLightbulb />,
      details: [
        "GST Compliance",
        "Litigation Strategy",
        "Tax Advisory",
        "Risk Reduction Plans"
      ],
    },
    {
      title: "Data Analysis & Business Insights",
      description:
        "Turn raw data into strategic decisions. We help businesses track KPIs, spot trends, and optimize operations through advanced data analytics.",
      image: dataAnalysisImage,
      icon: <FaChartLine />,
      details: [
        "KPI Analysis",
        "Business Trend Insights",
        "Predictive Analytics",
        "Data Visualization"
      ],
    },
    {
      title: "Industry-Specific Advisory & Compliance Solutions",
      description:
        "From manufacturing to services, we understand the unique challenges each industry faces. Our cross-sector experience allows us to deliver tailored solutions that fit your operational realities.",
      image: complianceSolutionImage,
      icon: <FaIndustry />,
      details: [
        "Manufacturing Sector Solutions",
        "Services Sector Advisory",
        "Cross-Industry Best Practices",
        "Regulatory Compliance Assistance"
      ],
    },
  ];

  return (
    <div className="sol-solutions-page">
      <div className="sol-solutions-hero">
        <h1 className="sol-solutions-title">Our Solutions</h1>
        <p className="sol-solutions-description">
          We provide a wide range of solutions tailored to your business needs,
          ensuring growth and sustainability in a competitive environment.
        </p>
      </div>
      {solutionsData.map((solution, index) => (
        
          <div
            key={index}
            className={`sol-solution-card ${index % 2 === 0 ?  "sol-reverse" : ""}`}
          >
            <div className="sol-solution-image-container">
              <img
                src={solution.image}
                alt={solution.title}
                className="sol-solution-image"
              />
            </div>
            <div className="sol-solution-details">
              <div className="sol-solution-icon">{solution.icon}</div>
              <h3 className="sol-solution-title">{solution.title}</h3>
              <p className="sol-solution-description">{solution.description}</p>
              <ul className="sol-service-list">
                {solution.details.map((detail, i) => (
                  <li key={i} className="sol-service-item">
                    <span className="sol-tick">✔️</span> {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

    </div>
  );
};

export default Solutions;
