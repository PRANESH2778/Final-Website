import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Track window size to determine mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  };


  // const toggleDropdown = (event, dropdownSetter) => {
  //   event.preventDefault();
  //   if (isMobile) {
  //     dropdownSetter(prevState => !prevState);
  //   }
  // };
  const toggleDropdown = (event, dropdownSetter, otherDropdownSetter) => {
    event.preventDefault();
    if (isMobile) {
      dropdownSetter(prevState => {
        const newState = !prevState;
        if (newState) {
          // If opening this dropdown, close the other
          otherDropdownSetter(false);
        }
        return newState;
      });
    }
  };
  
    

  return (
    <>
      {!isMobile && (
        <div className="top-bar">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="contact-info">
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
      )}

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container" style={{ margin: "0" }}>
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            Navbar
          </Link>

          <button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-expanded={!isCollapsed}>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`} id="navbarSupportedContent">
          {isMobile && (
  <div className="mobile-contact">
    <p><FaEnvelope /> <a href="mailto:abandco.surat@gmail.com">abandco.surat@gmail.com</a></p>
    <p><FaPhone /> <a href="tel:+912614531968">0261-4531968</a></p>
    <div className="mobile-social-icons mt-2">
      <a href="https://wa.me/919586737879" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
)}


            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeNavbar}>Home</Link>
              </li>
             <li className="nav-item">
  <div className="d-flex justify-content-between align-items-center nav-link p-0">
    <Link
      to="/solutions"
      className="nav-link flex-grow-1"
      onClick={closeNavbar}
      style={{ paddingRight: "0.5rem" }}
    >
      Solutions
    </Link>
    {isMobile && (
      <span
        className="dropdown-arrow pr-2"
        style={{ cursor: "pointer" }}
        onClick={(e) => toggleDropdown(e, setSolutionsDropdownOpen, setServicesDropdownOpen)}

      >
        {solutionsDropdownOpen ? "▼" : "▶"}
      </span>
    )}
  </div>

  {isMobile && solutionsDropdownOpen && (
    <ul className="dropdown-submenu">
      <li>
        <Link to="/DataAnalysisandBusinessInsights" className="dropdown-item" onClick={closeNavbar}>
          Data Analysis
        </Link>
      </li>
      <li>
        <Link to="/IndirectTaxAdvisoryandLitigationSupport" className="dropdown-item" onClick={closeNavbar}>
          Indirect Tax
        </Link>
      </li>
      <li>
        <Link to="/IndustrySpecificAdvisoryandComplianceSolutions" className="dropdown-item" onClick={closeNavbar}>
          Industry Advisory
        </Link>
      </li>
      <li>
        <Link to="/InternalAuditandMISReporting" className="dropdown-item" onClick={closeNavbar}>
          Internal Audit
        </Link>
      </li>
      <li>
        <Link to="/OutsourcedAccountingandBookkeeping" className="dropdown-item" onClick={closeNavbar}>
          Bookkeeping
        </Link>
      </li>
    </ul>
  )}
</li>




<li 
  className={`nav-item dropdown position-relative ${servicesDropdownOpen ? "show" : ""}`}
  onMouseEnter={() => {
    if (!isMobile) {
      setServicesDropdownOpen(true);
      setSolutionsDropdownOpen(false);
    }
  }}
  onMouseLeave={() => {
    if (!isMobile) {
      setServicesDropdownOpen(false);
    }
  }}
>
  <div className="d-flex align-items-center justify-content-between">
    <Link
      className="nav-link"
      to="/services"
      onClick={() => {
        if (!isMobile) {
          closeNavbar();
        } else {
          // In mobile: just toggle the dropdown
          setServicesDropdownOpen((prev) => !prev);
          setSolutionsDropdownOpen(false);
        }
      }}
    >
      Services
    </Link>

    {/* Arrow icon span for mobile toggle */}
    {isMobile && (
      <span
        className={`nav-link dropdown-toggle dropdown-toggle-mobile`}
        style={{ cursor: "pointer", paddingLeft: "0px" }}
        onClick={(e) => {
          e.stopPropagation();
          setServicesDropdownOpen((prev) => !prev);
          setSolutionsDropdownOpen(false);
        }}
        aria-haspopup="true"
        aria-expanded={servicesDropdownOpen}
      ></span>
    )}
  </div>

  <div
    className={`dropdown-menu ${servicesDropdownOpen ? "show" : ""}`}
    aria-labelledby="navbarDropdown"
    style={{ top: "100%", left: "0", zIndex: "1000" }}
  >
    <Link className="dropdown-item" to="/DirectTaxation" onClick={closeNavbar}>Direct Taxation</Link>
    <Link className="dropdown-item" to="/AccountingBookkeeping" onClick={closeNavbar}>Accounting & Bookkeeping</Link>
    <Link className="dropdown-item" to="/AuditAssurance" onClick={closeNavbar}>Audit & Assurance</Link>
    <Link className="dropdown-item" to="/BusinessAdvisory" onClick={closeNavbar}>Business Advisory</Link>
    <Link className="dropdown-item" to="/ForeignExchangeMatters" onClick={closeNavbar}>Foreign Exchange Matters</Link>
    <Link className="dropdown-item" to="/GSTIndirectTaxes" onClick={closeNavbar}>GST & Indirect Taxes</Link>
    <Link className="dropdown-item" to="/InternationalTaxationFEMA" onClick={closeNavbar}>International Taxation & FEMA</Link>
    <Link className="dropdown-item" to="/StartupSMEServices" onClick={closeNavbar}>Startup & SME Services</Link>
  </div>
</li>




              <li className="nav-item">
                <Link className="nav-link" to="/blogs" onClick={closeNavbar}>Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team" onClick={closeNavbar}>Our Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactus" onClick={closeNavbar}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
