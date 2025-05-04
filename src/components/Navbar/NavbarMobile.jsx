// NavbarMobile.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const NavbarMobile = ({
  isCollapsed,
  toggleNavbar,
  servicesDropdownOpen,
  setServicesDropdownOpen,
  solutionsDropdownOpen,
  setSolutionsDropdownOpen,
  closeNavbar,
}) => {
  const toggleDropdown = (event, dropdownSetter, otherDropdownSetter) => {
    event.preventDefault();
    event.stopPropagation();
    dropdownSetter((prev) => {
      const newState = !prev;
      if (newState) otherDropdownSetter(false);
      return newState;
    });
  };
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-expanded={!isCollapsed}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}>
            <div className="mobile-contact">
              <p>
                <FaEnvelope /> <a href="mailto:abandco.surat@gmail.com">abandco.surat@gmail.com</a>
              </p>
              <p>
                <FaPhone /> <a href="tel:+912614531968">0261-4531968</a>
              </p>
              <div className="mobile-social-icons mt-2">
                <a href="https://wa.me/919586737879" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
              </li>

              {/* Solutions Dropdown */}
              <li className="nav-item">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <Link
                    to="/solutions"
                    className="nav-link flex-grow-1"
                    onClick={closeNavbar}
                  >
                    Solutions
                  </Link>
                  <span
                    className="nav-link dropdown-toggle"
                    style={{ cursor: "pointer", paddingLeft: "0px" }}
                    onClick={(e) => toggleDropdown(e, setSolutionsDropdownOpen, setServicesDropdownOpen)}
                    aria-haspopup="true"
                    aria-expanded={solutionsDropdownOpen}
                  >
                    {solutionsDropdownOpen ? "▼" : "▶"}
                  </span>
                </div>
                {solutionsDropdownOpen && (
                  <div className="dropdown-menu show">
                    <Link to="/DataAnalysisandBusinessInsights" className="dropdown-item" onClick={closeNavbar}>Data Analysis & Business Insights</Link>
                    <Link to="/IndirectTaxAdvisoryandLitigationSupport" className="dropdown-item" onClick={closeNavbar}>Indirect Tax Advisory & Litigation Support</Link>
                    <Link to="/IndustrySpecificAdvisoryandComplianceSolutions" className="dropdown-item" onClick={closeNavbar}>Industry Specific Advisory & Compiance Solutions</Link>
                    <Link to="/InternalAuditandMISReporting" className="dropdown-item" onClick={closeNavbar}>Internal Audit & MIS Reporting</Link>
                    <Link to="/OutsourcedAccountingandBookkeeping" className="dropdown-item" onClick={closeNavbar}>Outsourced Accounting & Bookkeeping</Link>
                  </div>
                )}
              </li>

              {/* Services Dropdown */}
              <li className="nav-item">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <Link
                    to="/services"
                    className="nav-link flex-grow-1"
                    onClick={closeNavbar}
                  >
                    Services
                  </Link>
                  <span
                    className="nav-link dropdown-toggle"
                    style={{ cursor: "pointer", paddingLeft: "0px" }}
                    onClick={(e) => toggleDropdown(e, setServicesDropdownOpen, setSolutionsDropdownOpen)}
                    aria-haspopup="true"
                    aria-expanded={servicesDropdownOpen}
                  >
                    {servicesDropdownOpen ? "▼" : "▶"}
                  </span>
                </div>
                {servicesDropdownOpen && (
                  <div className="dropdown-menu show">
                    <Link className="dropdown-item" to="/DirectTaxation" onClick={closeNavbar}>Direct Taxation</Link>
                    <Link className="dropdown-item" to="/AccountingBookkeeping" onClick={closeNavbar}>Accounting & Bookkeeping</Link>
                    <Link className="dropdown-item" to="/AuditAssurance" onClick={closeNavbar}>Audit & Assurance</Link>
                    <Link className="dropdown-item" to="/BusinessAdvisory" onClick={closeNavbar}>Business Advisory</Link>
                    <Link className="dropdown-item" to="/ForeignExchangeMatters" onClick={closeNavbar}>Foreign Exchange Matters</Link>
                    <Link className="dropdown-item" to="/GSTIndirectTaxes" onClick={closeNavbar}>GST & Indirect Taxes</Link>
                    <Link className="dropdown-item" to="/InternationalTaxationFEMA" onClick={closeNavbar}>International Taxation & FEMA</Link>
                    <Link className="dropdown-item" to="/StartupSMEServices" onClick={closeNavbar}>Startup & SME Services</Link>
                  </div>
                )}
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

export default NavbarMobile;
