
import React, { useState, useEffect } from 'react';
import "../Styles/ChangingPictures.css";

const ChangingPictures = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((currentIndex + 1) % images.length);
    };
  
    const visibleImages = [
      images[(currentIndex - 1 + images.length) % images.length],
      images[currentIndex],
      images[(currentIndex + 1) % images.length],
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000);
  
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);
  
    return (
      <div className="carousel-container">
        <div className="image-container">
          {visibleImages.map((image, index) => (
            <img className = "img-cur" key={index} src={image} alt="Carousel"/>
          ))}
        </div>
      </div>
    );
  };
  

export default ChangingPictures;