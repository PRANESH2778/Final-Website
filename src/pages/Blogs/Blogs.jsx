import React, { useState } from "react";
import { FaBalanceScale, FaClipboardCheck, FaFileInvoiceDollar, FaRocket } from "react-icons/fa";
import "./Blogs.css"; // Add CSS for styling

// Sample Blog Data with Icons
const blogData = [
  {
    id: 1,
    title: "Understanding Direct Taxation",
    category: "Taxation",
    icon: <FaBalanceScale className="blog-icon" />,
    excerpt: "Learn about direct taxation and its impact on businesses.",
  },
  {
    id: 2,
    title: "Audit & Assurance: Key Insights",
    category: "Audit & Assurance",
    icon: <FaClipboardCheck className="blog-icon" />,
    excerpt: "A detailed guide on auditing processes and standards.",
  },
  {
    id: 3,
    title: "GST Compliance for Businesses",
    category: "GST & Indirect Taxes",
    icon: <FaFileInvoiceDollar className="blog-icon" />,
    excerpt: "Steps to ensure GST compliance in your business.",
  },
  {
    id: 4,
    title: "Startup Financial Planning",
    category: "Startup & SME Services",
    icon: <FaRocket className="blog-icon" />,
    excerpt: "Financial planning strategies for startups and SMEs.",
  },
];

const categories = [
  "All",
  "Taxation",
  "Audit & Assurance",
  "GST & Indirect Taxes",
  "Startup & SME Services",
];

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on selected category
  const filteredBlogs =
    selectedCategory === "All"
      ? blogData
      : blogData.filter((blog) => blog.category === selectedCategory);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Our Latest Blogs</h2>

      {/* Blog Filters */}
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

      {/* Blog List */}
      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-icon-container">{blog.icon}</div>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <button className="read-more-btn">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
