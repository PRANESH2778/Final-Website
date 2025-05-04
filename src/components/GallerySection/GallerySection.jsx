import React, { useState, useEffect } from "react";
import "./GallerySection.css";

const GallerySection = () => {
  const images = [
    { src: "https://plus.unsplash.com/premium_photo-1679922389798-8b38c78b5670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNjb3VudHN8ZW58MHx8MHx8fDA%3D", alt: "Gallery Image 1" },
    { src: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWNjb3VudHN8ZW58MHx8MHx8fDA%3D", alt: "Gallery Image 2" },
    { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjY291bnRzfGVufDB8fDB8fHww", alt: "Gallery Image 3" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFjY291bnRzfGVufDB8fDB8fHww", alt: "Gallery Image 4" },
    { src: "https://images.unsplash.com/photo-1544761634-dc512f2238a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGFjY291bnRzfGVufDB8fDB8fHww", alt: "Gallery Image 5" },
    { src: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWNjb3VudHN8ZW58MHx8MHx8fDA%3D", alt: "Gallery Image 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Next and previous slide handlers
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto slideshow effect
  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className="gallery-section">
      <h2>Our Gallery</h2>
      <p>Explore moments and highlights captured from our projects and events.</p>
      <div className="gallery-item-container">
        <div className="gallery-item">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
          {/* <div className="overlay">
            <span>View Details</span>
          </div> */}
        </div>
        <button className="prev" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next" onClick={nextSlide}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default GallerySection;
