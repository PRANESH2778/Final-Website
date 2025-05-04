import React, { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./TeamDetails.css";

const TeamDetails = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Simulate API call
    const fetchTeamData = async () => {
      const data = [
        {
          name: "CA Ajay Agrawal (Partner)",
          title: "B.com, ACA, FAFD, Cer. Conc. Auditor",
          description:
            "Avinash Gupta is a meritorious chartered accountant who graduated with honors in commerce...",
          image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww", // Replace with your API response
          linkedin: "https://linkedin.com/in/avinashgupta",
          email: "avinash@example.com",
          phone: "+91-9876543210",
        },
        {
          name: "CA Niraj Bhaiya (Partner)",
          title: "B.com, ACA, DISA, Cer. Conc. Auditor",
          description:
            "Uttam Patel specializes in international tax, company law matters, IFRS, and related work...",
          image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww", // Replace with your API response
          linkedin: "https://linkedin.com/in/uttampatel",
          email: "uttam@example.com",
          phone: "+91-9876543220",
        },
        {
          name: "CA Vijay Agrawal (partner)",
          title: "B.com, ACA",
          description:
            "Uttam Patel specializes in international tax, company law matters, IFRS, and related work...",
          image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww", // Replace with your API response
          linkedin: "https://linkedin.com/in/uttampatel",
          email: "uttam@example.com",
          phone: "+91-9876543220",
        },
        
      ];
      setTeamMembers(data);
    };

    fetchTeamData();
  }, []);

  const handleKnowMore = () => {
    navigate("/team"); // Navigate to the Team.jsx page
  };

  return (
    <div className="team-main-container">
      <h1 className="team-main-title">Managing Partners</h1>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.image}
              alt={member.name}
              className="team-image"
            />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-title-small">{member.title}</p>
            <div className="team-icons">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon linkedin-icon"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={`mailto:${member.email}`}
                className="icon email-icon"
                title="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href={`tel:${member.phone}`}
                className="icon phone-icon"
                title="Phone"
              >
                <FaPhone />
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="know-more-btn" onClick={handleKnowMore}>
        Know More
      </button>
    </div>
  );
};

export default TeamDetails;
