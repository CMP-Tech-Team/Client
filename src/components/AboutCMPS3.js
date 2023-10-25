import { useState } from "react";
//import BtnSlider from "./BtnSlider.js"
import "../Styles/AboutCMPS3.css";
import dataSlider from "./dataSlider.js"

const AboutCMPS3 = ({ imagesC }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % imagesC.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? imagesC.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage} className="slider-button prev">
        Previous
      </button>
      <img className = "img-car" src={imagesC[currentImageIndex]} alt="Slider" />
      <button onClick={nextImage} className="slider-button next">
        Next
      </button>
    </div>
  );
};


export default AboutCMPS3;