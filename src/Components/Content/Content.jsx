import React, { useEffect, useRef, useState } from "react";
import "./Content.css";
import BannerImg from "/src/assets/banner.png";
import SignIn from "./SignIn";
import JoinIn from "./JoinIn";
const Content = ({activeTab, setActivetab}) => {
  
  return (
    <main className="main-content">
      <div className="container d-flex gap-3">
        <div className="row row-cols-1 row-cols-sm-2">
          <div className="col col-sm-8 pe-0 pe-sm-5 text-content">
            <h1>
              Explore your <span>hobby</span> or <span>passion</span>
            </h1>
            <p>
              Sign-in to interact with a community of fellow hobbyists and an
              eco-system of experts, teachers, suppliers, classes, workshops,
              and places to practice, participate or perform. Your hobby may be
              about visual or performing arts, sports, games, gardening, model
              making, cooking, indoor or outdoor activities…
            </p>
            <p className="d-none d-sm-block">
              If you are an expert or a seller, you can Add your Listing and
              promote yourself, your students, products, services or events. Hop
              on your hobbyhorse and enjoy the ride.
            </p>
          </div>
          <div className="col col-sm-4 pt-3 overflow-hidden">
            <div className="d-flex form gap-3">
              {activeTab == 0 ? (
                <SignIn setActivetab={setActivetab} activeTab={activeTab} />
              ) : (
                <JoinIn setActivetab={setActivetab} activeTab={activeTab} />
              )}
            </div>
          </div>
          <div className="col-8 col-sm-8 d-flex content-image">
            <img
              src={BannerImg}
              className="w-100 w-sm-100 object-fit-sm-contain object-fit-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
