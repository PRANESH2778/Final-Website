import React, { useEffect } from 'react';
import { FaBullhorn, FaShieldAlt, FaUsers, FaBriefcase, FaCheckCircle } from 'react-icons/fa';
import './AboutUs.css';

const AboutUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el) => {
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <div className="aboutcontainer">
      {/* About Section */}
      <section className="about-section-home fade-in">
        <div className="about-container-home about-flex">
          <div className="about-text">
            <h2>About Us</h2>
            <h3>Agrawal Bhaiya & Company</h3>
            <p>
              At Agrawal Bhaiya & Company, we blend deep domain expertise with a
              sharp analytical mindset to deliver practical and impactful
              solutions tailored to your business needs. With three seasoned
              partners and an associate Chartered Accountant, our team brings a
              wealth of experience across industries—driving value through
              actionable insights, financial clarity, and compliance excellence.
            </p>
            {/* <a href="/about" className="read-more-button">READ MORE</a> */}
          </div>
          <div className="about-image">
            <img
              src="https://media.istockphoto.com/id/2170331670/photo/young-indian-woman-explaining-about-company-growth-to-other-employees-on-tv-screen-with-data.webp?a=1&b=1&s=612x612&w=0&k=20&c=J-Zr4WTRV8MSI_SlhNDUYMF9PHyB-wTZ8-Qp5dfIPcA="
              alt="About AB and Co"
            />
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="cultureSection fade-in">
        <h2><FaUsers /> Our Culture</h2>
        <ul className="culture-list">
          {[
            "Client-Centric Approach",
            "Team Collaboration",
            "Continuous Learning",
            "Ethical Standards",
            "Innovation & Growth",
            "Work-Life Balance",
            "Diversity & Inclusion",
            "Celebrating Success Together"
          ].map((item, index) => (
            <li key={index}><FaCheckCircle className="icon" /> {item}</li>
          ))}
        </ul>
      </section>

      {/* Careers Section */}
      <section className="careersSection fade-in">
        <h2><FaBriefcase /> Explore Careers</h2>
        <p>
          Join a dynamic team committed to making a difference in the world of
          finance and compliance. Whether you're a fresher or a seasoned
          professional, AB & Co. offers a challenging and rewarding work
          environment with continuous learning opportunities.
        </p>
        <a href="/contactUs" className="read-more-button">Get In Touch</a>
      </section>
    </div>
  );
};

export default AboutUs;
