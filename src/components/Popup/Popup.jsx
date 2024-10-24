import React from "react";
import "./Popup.css"; 

const Popup = ({ isOpen, content, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Popup;
