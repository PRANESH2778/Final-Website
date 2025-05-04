import React, { useState, useEffect } from "react";
import "./Courosel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Courosel = ({ data, autoPlay = true, interval = 3000 }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  // Automatically transition slides if `autoPlay` is enabled
  useEffect(() => {
    let autoSlide;
    if (autoPlay) {
      autoSlide = setInterval(() => {
        nextSlide();
      }, interval);
    }
    return () => clearInterval(autoSlide); // Cleanup interval on component unmount
  }, [autoPlay, interval]);

  return (
    
    <div className="courosel">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={prevSlide}
      />
      
      {data.map((item, index) => (
        <div
          className={slide === index ? "slide" : "slide slide-hidden"}
          key={index}
        >
          <img src={item.src} alt={item.alt} />
          <div className="slide-text">{item.text}</div> {/* Text over the image */}
          <div className="slide-sub-text">{item.subText}</div>
        </div>
      ))}
      {/* <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={nextSlide}
      /> */}
      <span className="indicators">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlide(index)}
            className={slide === index ? "indicator" : "indicator indicator-inactive"}
          ></button>
        ))}
      </span>
    </div>
  );
};

export default Courosel;
