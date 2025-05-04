import React, { useState } from "react";
import "./Team.css";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    // ... (same data as before)
    {
      id: 1,
      name: "CA Ajay Agrawal",
      title: "B.com, ACA, FAFD, Cer. Conc. Auditor",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "Expert in GST litigation and internal audits, helps businesses navigate complex tax issues while strengthening internal controls and operational efficiency.",
      fullDescription: `CA Ajay Satyanarayan Agrawal
Partner | Internal Audit & Litigation Expert

CA Ajay Satyanarayan Agrawal, with over 4 years of professional experience, specializes in internal audits across diverse industries, focusing on identifying operational inefficiencies, financial loopholes, and areas for improvement. His meticulous approach to business process review helps organizations strengthen internal controls and enhance operational efficiency.

Ajay also possesses strong expertise in handling litigation matters across industries, representing clients before tax authorities and guiding them through complex regulatory challenges.`,

specializations: [
  "Internal Audits for Diverse Industries",
  "Process Reviews & Operational Efficiency Consulting",
  "Identification & Rectification of Financial Loopholes",
  "Litigation Handling & Representation Before Tax Authorities",
  "Compliance & Risk Management Advisory",
]
    },
    {
      id: 2,
      name: "CA Niraj Bhaiya",
      title: "B.com, ACA, DISA, Cer. Conc. Auditor",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "Specializing in data-driven insights and tech-enabled bookkeeping, streamlines financial processes through automation and delivers accurate, actionable reporting.",
      fullDescription: `CA Niraj Kumar Bhaiya
Partner | Data Analyst & Tech-Driven Financial Insights

With over 4 years of professional experience, CA Niraj Kumar Bhaiya brings a unique blend of traditional audit expertise combined with a technology-first approach to financial reporting and data analysis.

Niraj has successfully led and conducted numerous Bank Audits, ensuring regulatory compliance and accurate financial disclosures. His passion for technology integration in financial reporting allows clients to leverage data analytics for meaningful business insights, empowering management to make informed and strategic decisions.`,

specializations:[
    "Statutory & Concurrent Bank Audits",
    "Technology-Driven Financial Analysis",
    "MIS Automation & Dashboard Reporting",
    "Data Insights for Better Decision-Making",
    "Compliance Reporting for Financial Institutions",
]
    },
    {
      id: 3,
      name: "CA Vijay Agrawal",
      title: "B.com, ACA",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "Specializes in financial reporting, startup valuation, and investor readiness. Assists growing businesses with fundraising strategies and due diligence.",
      fullDescription: `CA Vijay Satyanarayan Agrawal
Senior Partner | Financial Reporting & Valuation Expert

CA Vijay Satyanarayan Agrawal, Senior Partner at Agrawal Bhaiya & Company, brings over 6 years of rich experience in financial reporting, MIS reporting, and startup valuation.

With a strong focus on creating investor-ready documents and financial models, Vijay has played a crucial role in assisting startups with fundraising through angel investors and venture capitalists. His analytical acumen and deep understanding of business financials help businesses craft a clear and compelling financial story for stakeholders.`,

specializations:[
   "Financial Reporting & MIS Reports",
    "Startup Valuation & Financial Modelling",
    "Investor Pitch Deck Preparation",
    "Fundraising Assistance & Financial Due Diligence",
    "Business Financial Health Analysis & Forecasting",
]
    },
    {
      id: 4,
      name: "CA Shashank Gangil",
      title: "B.com, ACA",
      image:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
      shortDescription:
        "An expert in internal audits, financial reporting, and GST audits, supports businesses in strengthening compliance and ensuring smooth tax assessments.",
      fullDescription: `CA Shashank Gangil
Associate | Audit & Compliance

He is a dynamic Chartered Accountant with strong expertise in internal audits, financial reporting, and GST audits. With hands-on experience across multiple sectors, he plays a key role in identifying control gaps, ensuring statutory compliance, and enhancing financial accuracy for clients.

His analytical approach and attention to detail contribute significantly to delivering value-driven audit outcomes.`,

specializations: [
  "Internal Audit & Process Review",
   "Financial Statement Preparation",
    "GST Compliance & Audit Support",
    "Expense & Revenue Analysis",
    "Audit Documentation & Reporting",
    "Excel-based MIS & Reconciliation"
]
    }
]

  const managingPartners = teamMembers.slice(0, 3);
  const team = teamMembers.slice(3);

  const handleOpenModal = (member) => {
    setSelectedMember(member);
  };

  const handleCloseModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="team-container">
      <h1 className="team-title">Our Team</h1>

      <h2 className="team-section-title">Managing Partners</h2>
      <div className="team-grid">
        {managingPartners.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="card-image">
              <img src={member.image} alt={member.name} />
              <div className="card-overlay">
                <p>{member.shortDescription}</p>
                <span
                  onClick={() => handleOpenModal(member)}
                  className="read-more"
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="team-section-title">Team Members</h2>
      <div className="team-grid">
        {team.map((member) => (
          <div className="team-card" key={member.id}>
            <div className="card-image">
              <img src={member.image} alt={member.name} />
              <div className="card-overlay">
                <p>{member.shortDescription}</p>
                <span
                  onClick={() => handleOpenModal(member)}
                  className="read-more"
                >
                  Read More
                </span>
              </div>
            </div>
            <div className="card-info">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="modal-image"
            />
            <h2>
              {selectedMember.name} ({selectedMember.title})
            </h2>
            <p>{selectedMember.fullDescription}</p>
            {selectedMember.specializations && (
              <ul className="specializations">
                {selectedMember.specializations.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
