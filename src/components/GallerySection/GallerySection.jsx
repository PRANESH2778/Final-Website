import React, { useState, useEffect } from "react";
import "./GallerySection.css";
import GalleryImg1 from '../../assets/GalleryImg1.jpg'
import GalleryImg2 from '../../assets/GalleryImg2.jpg'
import GalleryImg3 from '../../assets/GalleryImg3.jpg'
import GalleryImg4 from '../../assets/GalleryImg4.jpg'
const GallerySection = () => {
  const images = [
    { src: GalleryImg1, alt: "Gallery Image 1" },
    { src: GalleryImg2, alt: "Gallery Image 2" },
    { src: GalleryImg3, alt: "Gallery Image 3" },
    { src: GalleryImg4, alt: "Gallery Image 4" },
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
