import React from "react";
import "./styles/EmojiButton.css";

export default function EmojiButton() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="interactive-container">
          <div className="person smiling-person">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth"></div>
          </div>
          <div className="box">
            <span className="dots">......</span>
          </div>
          <div className="person surprised-person">
            <div className="eyes">
              <div className="eye"></div>
              <div className="eye"></div>
            </div>
            <div className="mouth mouth-surprised"></div>
          </div>
        </div>
        <div className="text-container">
          <span className="text">Share with Friends!</span>
        </div>
      </div>
    </div>
  );
}
