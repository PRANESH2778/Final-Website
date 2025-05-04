import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutSection.css";
import aboutImage from "../../assets/aboutUs.jpg"; // Replace with your image path

const AboutSection = () => {
  const navigate = useNavigate();
  const navigateToAbout = ()=>{
    navigate('/aboutus')
  }
  return (
    <section className="about-section-home">
      <div className="about-wrapper">
        <div className="about-image">
          <img src={aboutImage} alt="About Agrawal Bhaiya & Co" />
        </div>
        <div className="about-content">
          <h2>
            <span className="section-title">About Us</span>
          </h2>
          <h3>Agrawal Bhaiya & Company</h3>
          <p>
            At Agrawal Bhaiya & Company, we blend deep domain expertise with a
            sharp analytical mindset to deliver practical and impactful
            solutions tailored to your business needs. With three seasoned
            partners and an associate Chartered Accountant, our team brings a
            wealth of experience across industries—driving value through
            actionable insights, financial clarity, and compliance excellence.
          </p>
          <button className="read-more-btn" onClick={navigateToAbout}>READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
