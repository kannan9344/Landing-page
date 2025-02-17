import React from "react";
import "../Content/Content.css";
import SignInModal from "./SignInModal";
import JoinInModal from "./JoinInModal";
const Modal = ({ activeTab, setActivetab, toggle }) => {
  return (
    <div
      className={`col col-sm-4 pt-3 overflow-hidden ${
        toggle ? "d-block" : "d-none"
      }`}
    >
      <div className="d-flex form gap-3 p-3 p-sm-0 w-100 bg-white modal-container position-absolute">
        {activeTab == 0 ? (
          <SignInModal setActivetab={setActivetab} activeTab={activeTab} />
        ) : (
          <JoinInModal setActivetab={setActivetab} activeTab={activeTab} />
        )}
      </div>
    </div>
  );
};

export default Modal;
