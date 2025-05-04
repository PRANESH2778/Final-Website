import React from "react";
import { FaUsers, FaClock, FaLaptopCode, FaHandshake } from "react-icons/fa";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  return (
    <section className="experience-section">
      <h2>Our Experience, Skills & Expertise</h2>
      <p>
        We bring you the best possible solutions for the growth and prosperity
        of your business.
      </p>
      <div className="stats-container">
        <div className="stat-card">
          <FaUsers size={50} color="#444444" />
          <div className="stat-number">200+</div>
          <div className="stat-label">Clients</div>
        </div>
        <div className="stat-card">
          <FaClock size={50} color="#444444" />
          <div className="stat-number">2500k+</div>
          <div className="stat-label">Hours of Experience</div>
        </div>
        <div className="stat-card">
          <FaLaptopCode size={50} color="#444444" />
          <div className="stat-number">50+</div>
          <div className="stat-label">Software Expertise</div>
        </div>
        <div className="stat-card">
          <FaHandshake size={50} color="#444444" />
          <div className="stat-number">90%+</div>
          <div className="stat-label">Client Retention</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;