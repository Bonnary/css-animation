import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "./styles/IconsBackgroundHover.css";
export default function IconsBackgroundHover() {
  return (
    <div className="wrapper">
      <div className="button">
        <FaFacebookF className="icon" />
        <div className="fill"></div>
      </div>
      <div className="button">
        <FaTwitter className="icon" />
        <div className="fill"></div>
      </div>
      <div className="button">
        <FaYoutube className="icon" />
        <div className="fill"></div>
      </div>
      <div className="button">
        <FaInstagram className="icon" />
        <div className="fill"></div>
      </div>
    </div>
  );
}
