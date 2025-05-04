// NavbarDesktop.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const NavbarDesktop = ({
  servicesDropdownOpen,
  setServicesDropdownOpen,
  solutionsDropdownOpen,
  setSolutionsDropdownOpen,
  closeNavbar,
}) => {
  return (
    <>
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="contact-infos">
            <span><FaEnvelope /> <a href="mailto:abandco.surat@gmail.com">abandco.surat@gmail.com</a></span>
            <span><FaPhone /> <a href="tel:+912614531968">0261-4531968</a></span>
          </div>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/919586737879" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>Navbar</Link>
          <div className="navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link></li>

              <li
                className={`nav-item dropdown ${solutionsDropdownOpen ? "show" : ""}`}
                onMouseEnter={() => {
                  setSolutionsDropdownOpen(true);
                  setServicesDropdownOpen(false);
                }}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <Link className="nav-link" to="/solutions">Solutions</Link>
                <div className={`dropdown-menu ${solutionsDropdownOpen ? "show" : ""}`}>
                  <Link to="/DataAnalysisandBusinessInsights" className="dropdown-item mb-2" style={{paddingTop:"10px !important"}} onClick={() => { setSolutionsDropdownOpen(false); }}>Data Analysis & Business Insights</Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/IndirectTaxAdvisoryandLitigationSupport" className="dropdown-item mb-2" onClick={() => { setSolutionsDropdownOpen(false); }}>Indirect Tax Advisory & Litigation Support</Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/IndustrySpecificAdvisoryandComplianceSolutions" className="dropdown-item mb-2" onClick={() => { setSolutionsDropdownOpen(false); }}>Industry Specific Advisory & Compiance Solutions</Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/InternalAuditandMISReporting" className="dropdown-item mb-2" onClick={() => { setSolutionsDropdownOpen(false); }}>Internal Audit & MIS Reporting</Link>
                  <div class="dropdown-divider"></div>
                  <Link to="/OutsourcedAccountingandBookkeeping" className="dropdown-item" onClick={() => { setSolutionsDropdownOpen(false); }}>Outsourced Accounting & Bookkeeping</Link>
                </div>
              </li>

              <li
                className={`nav-item dropdown ${servicesDropdownOpen ? "show" : ""}`}
                onMouseEnter={() => {
                  setServicesDropdownOpen(true);
                  setSolutionsDropdownOpen(false);
                }}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <Link className="nav-link" to="/services">Services</Link>
                <div className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`}>
                  <Link className="dropdown-item mb-2" to="/DirectTaxation" onClick={() => {  setServicesDropdownOpen(false); }}>Direct Taxation</Link>
                  <div class="dropdown-divider"></div>
                  
                  <Link className="dropdown-item mb-2" to="/AccountingBookkeeping" onClick={() => {  setServicesDropdownOpen(false); }}>Accounting & Bookkeeping</Link>
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item mb-2" to="/AuditAssurance" onClick={() => {  setServicesDropdownOpen(false); }}>Audit & Assurance</Link>
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item mb-2" to="/BusinessAdvisory" onClick={() => {  setServicesDropdownOpen(false); }}>Business Advisory</Link>
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item mb-2" to="/ForeignExchangeMatters" onClick={() => {  setServicesDropdownOpen(false); }}>Foreign Exchange Matters</Link>
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item mb-2" to="/GSTIndirectTaxes" onClick={() => {  setServicesDropdownOpen(false); }}>GST & Indirect Taxes</Link>
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item mb-2" to="/InternationalTaxationFEMA" onClick={() => {  setServicesDropdownOpen(false); }}>International Taxation & FEMA</Link>
                  <div class="dropdown-divider"></div>
                  <Link className="dropdown-item" to="/StartupSMEServices" onClick={() => {  setServicesDropdownOpen(false); }}>Startup & SME Services</Link>
                </div>
              </li>

              <li className="nav-item"><Link className="nav-link" to="/blogs" onClick={closeNavbar}>Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/aboutus" onClick={closeNavbar}>About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/team" onClick={closeNavbar}>Our Team</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contactus" onClick={closeNavbar}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarDesktop;
