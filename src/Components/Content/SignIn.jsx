import React from "react";
import "./Content.css";
import facebookIcon from "/src/assets/facebook.png";
import googleIcon from "/src/assets/Google.png";
const SignIn = ({ activeTab, setActivetab }) => {
  return (
    <form className="form-item w-100">
      <div className="d-flex align-items-center gap-3">
        <h3
          className={`${activeTab == 0 ? "active" : "unactive"}`}
          onClick={() => setActivetab(0)}
        >
          Sign in
        </h3>
        <h3
          className={`${activeTab == 1 ? "active" : "unactive"}`}
          onClick={() => setActivetab(1)}
        >
          Join in
        </h3>
      </div>
      <div className="btns">
        <div className="btn-1 w-100 d-flex align-items-center">
          <img src={googleIcon} alt="" />
          <strong>Continue with Google</strong>
        </div>
        <div className="btn-1">
          <img src={facebookIcon} alt="" />
          <strong>Continue with Facebook</strong>
        </div>
      </div>
      <div className="d-flex align-items-center py-2">
        <div className="col line"></div>
        <strong className="col connect text-center">or connect with</strong>
        <div className=" col line"></div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          className="w-100 bg-white border"
        />
        <div className="position-relative eye">
          <input
            type="password"
            placeholder="Password"
            className="w-100 bg-white border"
          />
          <i className="fa-solid fa-eye-slash position-absolute right-0"></i>
        </div>
      </div>
      <div className="w-100 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <input type="checkbox" className="m-0" />
          <div className="remember">Remember me</div>
        </div>
        <div className="d-flex align-items-center gap-3">
          <i className="fa-solid fa-lock"></i>
          <div>Forget password ?</div>
        </div>
      </div>
      <div className="continue-btn text-center w-100 border my-1 border-1">
        Continue
      </div>
    </form>
  );
};

export default SignIn;
