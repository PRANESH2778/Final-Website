import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBalanceScale,
  FaMoneyCheckAlt,
  FaBook,
  FaClipboardCheck,
  FaLightbulb,
  FaRocket,
  FaGlobe,
  FaExchangeAlt,
} from "react-icons/fa";
import "./ServiceProvide.css";

const ServiceProvide = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Direct Taxation",
      shortDescription: "Tax planning and filing of returns for individuals and businesses.",
      description: "View More",
      icon: <FaBalanceScale size={50} color="#ff5733" />,
      link: "/DirectTaxation",
    },
    {
      title: "GST & Indirect Taxes",
      shortDescription: "Consulting and compliance services for GST and  indirect taxes.",
      description: "View More",
      icon: <FaMoneyCheckAlt size={50} color="#28a745" />,
      link: "/GSTIndirectTaxes",
    },
    {
      title: "Accounting & Bookkeeping",
      shortDescription: "Maintain accurate financial records and ensure compliance.",
      description: "View More",
      icon: <FaBook size={50} color="#ffc107" />,
      link: "/AccountingBookkeeping",
    },
    {
      title: "Audit & Assurance",
      shortDescription: "Ensuring the accuracy of financial statements through audits.",
      description: "View More",
      icon: <FaClipboardCheck size={50} color="#007bff" />,
      link: "/AuditAssurance",
    },
    {
      title: "Business Advisory",
      shortDescription: "Helping businesses grow through strategic advice and planning.",
      description: "View More",
      icon: <FaLightbulb size={50} color="#6c757d" />,
      link: "/BusinessAdvisory",
    },
    {
      title: "Startup & SME Services",
      shortDescription: "Support and guidance for startups and small-medium enterprises.",
      description: "View More",
      icon: <FaRocket size={50} color="#17a2b8" />,
      link: "/StartupSMEServices",
    },
    {
      title: "International Taxation & FEMA",
      shortDescription: "Guidance on cross-border taxation and FEMA compliance.",
      description: "View More",
      icon: <FaGlobe size={50} color="#343a40" />,
      link: "/InternationalTaxationFEMA",
    },
    {
      title: "Foreign Exchange Matters",
      shortDescription: "Consultation on forex regulations and international payments.",
      description: "View More",
      icon: <FaExchangeAlt size={50} color="#FACC15" />,
      link: "/ForeignExchangeMatters",
    },
  ];

  return (
    <div className="serviceprovide-container">
      <h1 className="services-title">SERVICES WE PROVIDE</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-head-title">{service.title}</h3>
            <p className="service-short-description">{service.shortDescription}</p> {/* Added description */}
            <Link to={service.link} className="service-description">
              {service.description}
            </Link>
          </div>
        ))}
      </div>
      <div className="know-more-container">
        <button
          className="know-more-button"
          onClick={() => navigate("/services")}
        >
          Know More
        </button>
      </div>
    </div>
  );
};

export default ServiceProvide;
