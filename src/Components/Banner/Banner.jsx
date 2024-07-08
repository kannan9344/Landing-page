import React from "react";
import "./Banner.css";
import BannerImg from "/src/assets/banner_img.png";
const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container bg-transparent d-flex d-sm-block gap-3 flex-column">
        <div>
          <h2>
            Your <span>hobby ,</span> Your <span>Community...</span>
          </h2>
          <div className="banner-btn text-center text-white rounded-1 py-1  mt-3 mt-sm-0">Get started</div>
        </div>
        <img src={BannerImg} className="w-100" alt="" />
      </div>
    </div>
  );
};

export default Banner;
