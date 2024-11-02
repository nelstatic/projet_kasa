import React from "react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="carousel">
        <div className="slide">
          {slides.length > 1 && (
            <button onClick={prevSlide} className="arrow left-arrow">
              {" "}
              <IoIosArrowBack />{" "}
            </button>
          )}

          <img src={slides[currentIndex]} alt={`slide ${currentIndex}`} />

          {slides.length > 1 && (
            <button onClick={nextSlide} className="arrow right-arrow">
              {" "}
              <IoIosArrowForward />{" "}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
