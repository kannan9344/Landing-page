import React from "react";
import Logo from "/src/assets/HobbyCue Logo.png";
import "./Header.css";

const Header = ({ toggle, setToggle }) => {
  const setStatus=()=>setToggle(!toggle)
  return (
    <header>
      <nav className="navbar py-3 p-sm-2 shadow-sm">
        <div className="container">
          <img src={Logo} className="logo" alt="" />
          <form className="d-none d-sm-flex">
            <input
              className="border rounded-start form-input"
              type="search"
              placeholder="Search here..."
              aria-label="Search"
            />
            <div className="d-flex justify-content-center align-items-center px-2 text-white rounded-end search-container">
              <i className="fa fa-search"></i>
            </div>
          </form>
          <div className="d-none d-sm-flex align-items-center icons-parent">
            <div className="d-flex align-items-center gap-4">
              <div className="d-flex align-items-center gap-2 icons position-relative drop-down-parent">
                <div className="icon-container text-white d-flex justify-content-center align-items-center rounded-circle fs-6">
                  <i className="fa-regular fa-compass"></i>
                </div>
                <strong className="">Explore</strong>
                <i className="fa fa-chevron-down"></i>
                <ul className="dropdown position-absolute bg-white m-0 p-0 shadow-sm">
                  <li className=" border-bottom">People-Community</li>
                  <li className=" border-bottom">Places-Venues</li>
                  <li className=" border-bottom">Programs-Events</li>
                  <li className=" border-bottom">Products-Store</li>
                  <li className=" border-bottom">Blogs</li>
                </ul>
              </div>
              <div className="d-flex align-items-center gap-2 icons">
                <div className=" icon-container text-white d-flex justify-content-center align-items-center rounded-circle fs-6">
                  <i className="fa fa-star"></i>
                </div>
                <strong>Hobbies</strong>
                <i className="fa fa-chevron-down"></i>
              </div>
              <i className="fa-solid fa-bookmark icon"></i>
              <i className="fa-solid fa-bell icon"></i>
              <i className="fa-solid fa-cart-shopping icon"></i>
              <div className="sign-in-btn text-center rounded-1 py-1 ">
                Sign in
              </div>
            </div>
          </div>
          <div className="menu-icons d-flex align-items-center gap-3 d-sm-none">
            <i className="fa fa-search"></i>
            <i className="fa-solid fa-bell icon"></i>
            {toggle ? (
              <i className="fa-solid fa-xmark" onClick={setStatus}></i>
            ) : (
              <i className="fa-solid fa-bars" onClick={setStatus}></i>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
