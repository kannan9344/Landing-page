import React from "react";
import "./Own.css";
const Own = () => {
  return (
    <div className="own-container d-flex align-items-center justify-content-center px-3 px-sm-0">
      <div className="container p-4 rounded-1 bg-white border d-flex d-sm-block flex-column align-items-center">
        <div className="d-flex align-items-center gap-2 own-item">
          <i className="fa-solid fa-plus text-center rounded-circle"></i>
          <strong>Add your own</strong>
        </div>
        <p className="my-3">
          Are you a teacher or expert? Do you sell or rent out equipment, venue
          or event tickets? Or, you know someone who should be on hobbycue? Go
          ahead and Add your Own page
        </p>
        <div className="own-btn  text-center rounded-1 py-1">Add new</div>
      </div>
    </div>
  );
};

export default Own;
