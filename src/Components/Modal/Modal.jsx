import React from "react";
import SignIn from "../Content/SignIn";
import JoinIn from "../Content/JoinIn";
import "../Content/Content.css";
const Modal = ({ activeTab, setActivetab, toggle }) => {
  return (
    <div
      className={`col col-sm-4 pt-3 overflow-hidden ${
        toggle ? "d-block" : "d-none"
      }`}
    >
      <div className="d-flex form gap-3 p-3 p-sm-0 w-100 bg-white modal-container position-absolute">
        {activeTab == 0 ? (
          <SignIn setActivetab={setActivetab} activeTab={activeTab} />
        ) : (
          <JoinIn setActivetab={setActivetab} activeTab={activeTab} />
        )}
      </div>
    </div>
  );
};

export default Modal;
