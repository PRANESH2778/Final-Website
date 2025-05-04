import React from "react";
import "./Services.css";

import directTaxImage from "../../assets/directTaxImage.jpg";
import gstImage from "../../assets/gstImage.jpg";
import accountingImage from "../../assets/accountingImage.jpg";
import auditImage from "../../assets/auditImage.jpg";
import advisoryImage from "../../assets/advisoryImage.jpg";
import startupImage from "../../assets/startupImage.jpg";
import internationalTaxImage from "../../assets/internationalTaxImage.jpg";

const services = [
  {
    title: "Direct Taxation",
    image: directTaxImage,
    details: [
      "Income Tax Return Filing",
      "Tax Advisory & Planning",
      "Tax Audits",
      "Representation before Tax Authorities",
    ],
  },
  {
    title: "GST & Indirect Taxes",
    image: gstImage,
    details: [
      "GST Registration & Compliance",
      "GST Returns Filing & Audits",
      "Advisory on Input Tax Credit (ITC)",
      "GST Health Check & Litigation Support",
    ],
  },
  {
    title: "Accounting & Bookkeeping",
    image: accountingImage,
    details: [
      "Outsourced Accounting",
      "Cloud Accounting Solutions (QuickBooks, Xero)",
      "Financial Statement Preparation",
      "MIS Reporting",
    ],
  },
  {
    title: "Audit & Assurance",
    image: auditImage,
    details: [
      "Statutory Audits",
      "Internal Audits",
      "Forensic Audits",
      "Stock Audits",
    ],
  },
  {
    title: "Business Advisory",
    image: advisoryImage,
    details: [
      "Business Structuring & Restructuring",
      "Due Diligence",
      "Financial Modelling",
      "Cash Flow & Budgeting Advisory",
    ],
  },
  {
    title: "Startup & SME Services",
    image: startupImage,
    details: [
      "Startup Incorporation (Company, LLP, Proprietorship)",
      "Funding & Investor Relations Support",
      "Government Scheme Guidance (MSME, Startup India)",
      "Compliance Management",
    ],
  },
  {
    title: "International Taxation & FEMA",
    image: internationalTaxImage,
    details: [
      "Cross Border Tax Advisory",
      "DTAA Advisory",
      "FEMA Compliances",
      "Foreign Subsidiary Setup & Compliances",
    ],
  },
];

const Services = () => {
  return (
    <div className="srv-services-page">
      <h1 className="srv-page-title">Our Services</h1>

      {services.map((service, index) => (
        <div
          className={`srv-service-card ${index % 2 !== 0 ? "srv-reverse" : ""}`}
          key={index}
        >
          <div className="srv-service-image-container">
            <img src={service.image} alt={service.title} className="srv-service-image" />
          </div>

          <div className="srv-service-details">
            <h2 className="srv-service-title">{service.title}</h2>
            <ul className="srv-service-list">
              {service.details.map((detail, i) => (
                <li key={i} className="srv-service-item">
                  <span className="srv-tick">✔️</span> {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
