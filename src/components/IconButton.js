import React from 'react'
import "./styles/IconButton.css";
import {
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
export default function IconButton() {
    return (
      <div className="container">
        <div className="buttonContainer">
          <div className="button">
            <h3 className="text">Share</h3>
            <FaShareAlt className="share" />
          </div>
          <div className="icons">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    );
}
