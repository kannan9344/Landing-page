import React from "react";
import "./Testimonial.css";
import Usericon from "/src/assets/user.png";
const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="container p-4 rounded-1 d-flex d-sm-block flex-column align-items-center">
        <div className="testi-header d-flex align-items-center gap-2">
          <i className="fa-solid fa-quote-left text-center text-white rounded-circle"></i>
          <h3>Testimonials</h3>
        </div>
        <p>
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="d-flex align-items-center flex-wrap-reverse flex-sm-nowrap gap-4">
          <div className="col col-sm-8 rounded-1 px-3 py-2 d-flex align-items-center justify-content-center justify-content-sm-between gap-2 bar-container">
          <i className="fa-solid bg-white rounded-circle text-center fa-play"></i>
            <div className="bars d-flex align-items-center gap-2">
              <div className="bar bg-white"></div>
              <small>0:00</small>
            </div>
           <div className="user-image position-relative">
           <img src={Usericon} alt="" />
           <i className="fa-solid fa-microphone text-white position-absolute"></i>
           </div>
          </div>
          <div className="col col-sm-4 d-flex align-items-center justify-content-sm-start justify-content-center gap-2">
            <div className="image">
              <img src={Usericon} alt="" />
            </div>
            <div>
              <h3>Shubha Nagarajan</h3>
              <small>Classical Dancer</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
