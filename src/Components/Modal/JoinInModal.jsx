import React from "react";
import "../Content/Content.css";
const JoinInModal = ({ activeTab, setActivetab }) => {
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

      <div>
        <input type="text" placeholder="Email" className="w-100" />
        <div className="position-relative eye">
          <input type="text" placeholder="Email" className="w-100"  />
          <input type="password" placeholder="Password" className="w-100" />
          <i className="fa-solid fa-eye position-absolute right-0"></i>
        </div>
      </div>
      <div className="w-100 d-flex justify-content-end">
        <div className="remember">Password Strength</div>
      </div>
      <div className="message my-2">
        By continuing, you agree to our{" "}
        <span className="text-black">Terms of Service</span> and{" "}
        <span className="text-black">Privacy Policy</span>
      </div>
      <div className="join-btn text-white border-0 text-center w-100 border my-1 border-1">
        Continue
      </div>
      <div className="d-flex align-items-center py-2">
        <div className="col line"></div>
        <strong className="col connect text-center">or connect with</strong>
        <div className=" col line"></div>
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
    </form>
  );
};

export default JoinInModal;
