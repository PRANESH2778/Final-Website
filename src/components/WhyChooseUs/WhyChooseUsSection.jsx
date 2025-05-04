import React from "react";
import { FaUsersCog, FaHandsHelping, FaLaptopCode, FaBalanceScale, FaPuzzlePiece } from "react-icons/fa"; // Import relevant icons
import "./WhyChooseUsSection.css";

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <p>
        Discover why businesses trust us to deliver exceptional solutions that
        exceed expectations.
      </p>
      <div className="features-grid">
        <div className="feature-card">
          <FaUsersCog size={50} color="#007acc" />
          <h3>Combined Expertise of Three Partners</h3>
          <p>
            Leverage the collective knowledge and experience of our three partners
            to address complex challenges effectively.
          </p>
        </div>
        <div className="feature-card">
          <FaHandsHelping size={50} color="#007acc" />
          <h3>Client-Centric Approach</h3>
          <p>
            We prioritize your needs, offering personalized services to achieve
            your goals and build lasting relationships.
          </p>
        </div>
        <div className="feature-card">
          <FaLaptopCode size={50} color="#007acc" />
          <h3>Technology-Driven Financial Solutions</h3>
          <p>
            Stay ahead with cutting-edge tools and technology integrated into
            our financial solutions.
          </p>
        </div>
        <div className="feature-card">
          <FaBalanceScale size={50} color="#007acc" />
          <h3>Commitment to Ethical Practices</h3>
          <p>
            Integrity is at the heart of our services, ensuring compliance with
            ethical standards and practices.
          </p>
        </div>
        <div className="feature-card">
          <FaPuzzlePiece size={50} color="#007acc" />
          <h3>Tailored Services for Diverse Sectors</h3>
          <p>
            We provide customized solutions that cater to the unique
            requirements of various industries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
