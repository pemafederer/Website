import React, { useState, useEffect, useRef } from "react";
import './App.css'

const delay = 3000; // 5 seconds

const slideStyles = {
  width: "auto",
  height: "100%",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  transition: "opacity 0.5s ease-in-out",
  textShadow: "1px 1px 2px rgba(0, 0, 0, 0.6)",
};


const ImageSliderSponsoren = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Start a timer to advance the slide automatically
    timeoutRef.current = setTimeout(goToNext, delay);

    // Clear the timer when the component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setCurrentIndex(newIndex);
    resetTimeout();
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setCurrentIndex(newIndex);
    resetTimeout();
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
    resetTimeout();
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(goToNext, delay);
  };

  return (
    <div className="slider">
      <div className="arrows">
        
        <div onClick={goToPrevious} className="leftArrow" color="white">
        ❰
        </div>
        
        <div onClick={goToNext} className="rightArrow">
          ❱
        </div>
        
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div className="dotsContainer" >
        {slides.map((_, slideIndex) => (
          <div
            className={`dot ${slideIndex === currentIndex ? "active" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderSponsoren;
