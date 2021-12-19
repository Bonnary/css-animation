import React from "react";
import "./styles/IconLayerHover.css";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function IconLayerHover() {
  return (
    <div className="container">
      <div className="IconContainer">
        <div className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <FaFacebookF />
          </span>
        </div>
        <div className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <FaTwitter />
          </span>
        </div>
        <div className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <FaYoutube />
          </span>
        </div>
        <div className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
}
