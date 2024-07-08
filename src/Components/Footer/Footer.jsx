import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="d-flex flex-column">
      <div className="container footer-container">
        <div className="row row-cols-1 row-cols-sm-4">
          <div className="col">
            <strong className="py-3">Hobbycue</strong>
            <ul className="m-0 p-0 d-flex d-sm-block flex-column gap-2 mt-2">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col">
            <strong className="mt-2">How Do I</strong>
            <ul className="m-0 p-0 d-flex d-sm-block flex-column gap-2 mt-2">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Past a Query</li>
              <li>Add a Blog Post </li>
              <li>Other Queries</li>
            </ul>
          </div>
          <div className="col">
            <strong>Quick Links</strong>
            <ul className="m-0 p-0 d-flex d-sm-block flex-column gap-2 mt-2">
              <li>Listing</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </ul>
          </div>
          <div className="col">
            <div className=" mt-2">
              <strong>Social Media</strong>
              <div className="icons my-3 d-flex align-items-center gap-2">
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-pinterest"></i>
                </div>
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-google-plus-g"></i>
                </div>
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-telegram"></i>
                </div>
                <div className="icon rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
            <div>
              <strong>Invite Friends</strong>
              <form className="d-flex my-2">
                <input
                  className="border px-3 py-2 rounded-start form-input"
                  type="search"
                  placeholder="Email Id"
                  aria-label="Search"
                />
                <div className="d-flex justify-content-center align-items-center px-3 text-white rounded-end search-container">
                  Invite
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right p-3 text-center">
        <i className="fa-regular fa-copyright px-2"></i>
        Purple Cues Private Limited
      </div>
    </footer>
  );
};

export default Footer;
