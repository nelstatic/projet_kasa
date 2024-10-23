import React from 'react';
import {useState} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Carousel=({slides})=>{
  const[currentIndex, setCurrentIndex]=useState(0);//initialise la slide courante à 0
  
  const prevSlide = () => {  //bouton gauche
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {                     //bouton droit
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1; 
    setCurrentIndex(newIndex);
  };

  return(
    <div>
      
      <div className="carousel">
       {/* affiche la slide actuelle */}
        <div className="slide">
          <button onClick={prevSlide} className="arrow left-arrow"> <IoIosArrowBack/> </button>
          <img src={slides[currentIndex]} alt={`slide ${currentIndex}`}/>
          <button onClick={nextSlide} className="arrow right-arrow"> <IoIosArrowForward/> </button>
        </div>
      </div>

    </div>
  );
};

export default Carousel;