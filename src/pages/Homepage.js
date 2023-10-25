import React from "react";
import "../Styles/Homepage.css";
import FollowUs from "../components/FollowUs";
import WhyChoose from "../components/WhyChoose";
import ChangingPictures from "../components/ChangingPictures";
import IMG_0061 from "../Imgs/IMG_0061.jpg";
import IMG_0062 from "../Imgs/IMG_0062.jpg";
import IMG_0063 from "../Imgs/IMG_0063.jpg";
import IMG_0064 from "../Imgs/IMG_0064.jpg";
import IMG_0065 from "../Imgs/IMG_0065.jpg";
import IMG_0066 from "../Imgs/IMG_0066.jpg";
import IMG_0067 from "../Imgs/IMG_0067.jpg";

const Homepage = () => {
    const images = [
      IMG_0061,
      IMG_0062,
      IMG_0063,
      IMG_0064,
      IMG_0065,
      IMG_0066,
      IMG_0067,
    ]

    return(
      <>
        <div className = "header">
          <ChangingPictures images={images} />
        </div>

        <div className = "row">
          <div className ="column">
            <h1 className ="header-1"> Why Choose CMPS</h1>
          </div>
          <div className="column" >
            <WhyChoose/>
          </div>
          <div className="column" >
            <FollowUs/>
          </div>
        </div>

      </>
    )
 }

 export default Homepage