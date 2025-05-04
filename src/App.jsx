import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState, useEffect } from "react";
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Services from './pages/Services/Services';
import Insights from './pages/Insights';
import ContactUs from './pages/ContactUs/ContactUs';
import Approach from './pages/Approach'
import Footer from './pages/Footer/Footer';
import Team from './pages/Team/Team';
import DirectTaxation from './components/ServicesCategories/DirectTaxation';
import AccountingBookkeeping from './components/ServicesCategories/AccountingBookkeeping';
import AuditAssurance from './components/ServicesCategories/AuditAssurance';
import BusinessAdvisory from './components/ServicesCategories/BusinessAdvisory';
import ForeignExchangeMatters from './components/ServicesCategories/ForeignExchangeMatters';
import GSTIndirectTaxes from './components/ServicesCategories/GSTIndirectTaxes';
import InternationalTaxationFEMA from './components/ServicesCategories/InternationalTaxationFEMA';
import StartupSMEServices from './components/ServicesCategories/StartupSMEServices';
import Layout from './components/Layout/Layout';
import Solutions from './pages/Solutions/Solutions';
import ScrollToTop from './components/ScrollToTop';
import Blogs from './pages/Blogs/Blogs';
import DataAnalysisandBusinessInsights from './components/SolutionCategories/DataAnalysisandBusinessInsights';
import IndirectTaxAdvisoryandLitigationSupport from './components/SolutionCategories/IndirectTaxAdvisoryandLitigationSupport';
import IndustrySpecificAdvisoryandComplianceSolutions from './components/SolutionCategories/IndustrySpecificAdvisoryandComplianceSolutions';
import InternalAuditandMISReporting from './components/SolutionCategories/InternalAuditandMISReporting';
import OutsourcedAccountingandBookkeeping from './components/SolutionCategories/OutsourcedAccountingandBookkeeping';
import NavbarMobile from './components/Navbar/NavbarMobile';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  
  const toggleNavbar = () => setIsCollapsed(!isCollapsed);
  const closeNavbar = () => {
    setIsCollapsed(true); // ✅ closes the menu
    setServicesDropdownOpen(false); // optional: close dropdowns too
    setSolutionsDropdownOpen(false);
  };
  return (
    <Router>
      <ScrollToTop/>
      {isMobile ? (
        <NavbarMobile
        isCollapsed={isCollapsed}
        toggleNavbar={toggleNavbar}
        closeNavbar={closeNavbar}
        servicesDropdownOpen={servicesDropdownOpen}
        setServicesDropdownOpen={setServicesDropdownOpen}
        solutionsDropdownOpen={solutionsDropdownOpen}
        setSolutionsDropdownOpen={setSolutionsDropdownOpen}
      />
      ) : (
        <NavbarDesktop
          servicesDropdownOpen={servicesDropdownOpen}
          solutionsDropdownOpen={solutionsDropdownOpen}
          setServicesDropdownOpen={setServicesDropdownOpen}
          setSolutionsDropdownOpen={setSolutionsDropdownOpen}
        />
      )}
      <div >
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/DataAnalysisandBusinessInsights" element={<DataAnalysisandBusinessInsights />} />
          <Route path="/IndirectTaxAdvisoryandLitigationSupport" element={<IndirectTaxAdvisoryandLitigationSupport />} />
          <Route path="/IndustrySpecificAdvisoryandComplianceSolutions" element={<IndustrySpecificAdvisoryandComplianceSolutions />} />
          <Route path="/InternalAuditandMISReporting" element={<InternalAuditandMISReporting />} />
          <Route path="/OutsourcedAccountingandBookkeeping" element={<OutsourcedAccountingandBookkeeping />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/DirectTaxation" element={<DirectTaxation />} />
          <Route path="/AccountingBookkeeping" element={<AccountingBookkeeping />} />
          <Route path="/AuditAssurance" element={<AuditAssurance />} />
          <Route path="/BusinessAdvisory" element={<BusinessAdvisory />} />
          <Route path="/ForeignExchangeMatters" element={<ForeignExchangeMatters />} />
          <Route path="/GSTIndirectTaxes" element={<GSTIndirectTaxes />} />
          <Route path="/InternationalTaxationFEMA" element={<InternationalTaxationFEMA />} />
          <Route path="/StartupSMEServices" element={<StartupSMEServices />} />
          <Route path="/contactus" element={<ContactUs />} />
          </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

// const styles = {
//   container: {
//     padding: '20px',
//     margin: '30px auto',
//     maxWidth: '1200px', // This ensures your content is centered and doesn't stretch too much on large screens
//   },
// };

export default App;