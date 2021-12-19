import React from "react";
import "./styles/IconsHoverAnimation.css";
export default function IconsHoverAnimation() {
  return (
    <div className="wrapper">
      <div className="button facebook">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>

        <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="" />
      </div>
      <div className="button instagram">
        <div className="circle circle-3"></div>

        <img
          src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"
          alt=""
        />
      </div>
      <div className="button twitter">
        <img
          src="https://img.icons8.com/color/48/000000/twitter-squared.png"
          alt=""
        />
      </div>
    </div>
  );
}
