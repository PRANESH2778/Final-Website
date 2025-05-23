import React, { useState } from "react";
import { FaBalanceScale, FaFileInvoiceDollar, FaShip, FaClipboardCheck } from "react-icons/fa";
// import { FaBalanceScale, FaClipboardCheck, FaFileInvoiceDollar, FaRocket } from "react-icons/fa";
import "./Blogs.css";

const trimExcerpt = (text, maxLength = 140) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const blogData = [
  {
    id: 1,
    title: "Extended Timeline for Filing Updated Income Tax Returns (ITR-U): Key Amendments Effective April 1, 2025",
    category: "Income Tax",
    icon: <FaFileInvoiceDollar className="blog-icon" />,
    excerpt: trimExcerpt(
      "The Central Board of Direct Taxes (CBDT) has extended the timeline for filing Updated Income Tax Returns (ITR-U) to 48 months, effective from April 1, 2025. This amendment under the Finance Act, 2025, provides taxpayers a broader window to rectify or update their returns, encouraging voluntary compliance, transparency, and reducing litigation risks."
    ),
    pdf: "/pdfs/extended-timeline-itr-u-2025.pdf",
  },
  {
    id: 5,
    title: "Reverse Charge Mechanism (RCM) on Rent of Immovable Property under GST",
    category: "GST & Indirect Taxes",
    icon: <FaClipboardCheck className="blog-icon" />,
    excerpt: trimExcerpt(
      "A comprehensive 2025 guide explaining when and how GST applies to rental income, and how tenants and landlords should comply under RCM."
    ),
    pdf: "/pdfs/rcm-rent-gst-guide-2025.pdf",
  },
  {
    id: 6,
    title: "GST on Ocean Freight from Foreign Shipping Lines: What Exporters Need to Know About RCM Changes from 1st October 2023",
    category: "GST",
    icon: <FaShip className="blog-icon" />,
    excerpt: trimExcerpt(
      "This article explains the GST implications on ocean freight services from foreign shipping lines, with major RCM changes effective 1st October 2023. Exporters must now comply with self-invoicing and IGST payment under RCM."
    ),
    pdf: "/pdfs/gst-ocean-freight-rcm-2023.pdf",
  },
  {
    id: 7,
    title: "Capital Gains Tax in India: Updated LTCG & STCG Rules for FY 2024-25",
    category: "Taxation",
    icon: <FaBalanceScale className="blog-icon" />,
    excerpt: trimExcerpt(
      "This detailed blog explains the changes in LTCG and STCG rules effective July 2024, including revised holding periods, tax rates, and the impact on various asset classes like equities, real estate, and gold."
    ),
    pdf: "/pdfs/capital-gains-tax-2024-25.pdf",
  },
];

const categories = [
  "All",
  "Income Tax",
  "GST",
  "GST & Indirect Taxes",
  "Taxation",
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Our Latest Blogs</h2>

      <div className="blog-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-icon-container">{blog.icon}</div>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <a
                href={blog.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more-btn"
              >
                Read More / Download PDF
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
