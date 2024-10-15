import React from 'react';
import {useState} from 'react';

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
        <button onClick={prevSlide} className="left-arrow"> ← </button>

       {/* affiche la slide actuelle */}
        <div className="slide">
         <img src={slides[currentIndex]} alt={`slide ${currentIndex}`}/>
        </div>

        <button onClick={nextSlide} className="right-arrow"> → </button>
      </div>

    </div>
  );
};

export default Carousel;