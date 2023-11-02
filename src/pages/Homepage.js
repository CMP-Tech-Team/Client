import React from "react";
import "../Styles/Homepage.css";
import FollowUs from "../components/FollowUs";
import WhyChoose from "../components/WhyChoose";
import BANNER from "../Imgs/BANNER.jpg"



const Homepage = () => {

    return(
      <>
        <div className = "header">
          <img className = "banner" src = {BANNER} alt = ""/>
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