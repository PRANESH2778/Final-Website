import React from "react";
import './SeparateSolution.css'
import dataAnalysisImage from "../../assets/dataAnalysis.jpg";
const DataAnalysisandBusinessInsights = () => {
  const details = [
    "Customized dashboards and data models",
    "Ratio analysis, trend analysis, and forecasting",
    "Business process improvement reports",
    "Excel-based tools and automation"
  ]
  return (
    <div className="sol-cat-container">
      <div className="sol-cat-hero">
        <img src={dataAnalysisImage} alt="dataAnalysisImage" className="sol-cat-hero-image"/>
        <div className="sol-cat-hero-text">
          <h1 className="sol-cat-title">Data Analysis & Business Insights</h1>
          <p className="sol-cat-description">Turn raw data into strategic decisions. We help businesses track KPIs, spot trends, and optimize operations through advanced data analytics.</p>
        </div>

      </div>
      <div className="sol-cat-details-section">
        <h2 className="sol-cat-section-heading">What we offer:</h2>
        <ul className="sol-cat-list">
          {details.map((detail,index)=>(
            <li key={index} className="sol-cat-list-item">
              <span className="sol-cat-tick">✔️</span>{detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <div className="family-business-container">
    //   <h2>Data Analysis & Business Insights</h2>
    //   <p>
    //   Turn raw data into strategic decisions. We help businesses track KPIs, spot trends, and optimize operations through advanced data analytics.

    //   </p>
    //   <h3>What we offer:</h3>
    //   <ul>
    //     <li>Customized dashboards and data models</li>
    //     <li>Ratio analysis, trend analysis, and forecasting</li>
    //     <li>Business process improvement reports</li>
    //     <li>Excel-based tools and automation</li>
    //   </ul>
    // </div>
  );
};

export default DataAnalysisandBusinessInsights;
