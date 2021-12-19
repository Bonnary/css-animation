import React from 'react'
import "./styles/IconRotation.css";
import {
  FaFacebookMessenger,
  FaWhatsapp,
  FaEnvelope,
  FaSms,
} from "react-icons/fa";

export default function IconRotation() {
    return (
      <div className="container">
        <div className="buttonContainer">
          <div className="button">
            <FaFacebookMessenger className="icon" />
          </div>
          <div className="button">
            <FaWhatsapp className="icon" />
          </div>
          <div className="button">
            <FaEnvelope className="icon" />
          </div>
          <div className="button">
            <FaSms className="icon" />
          </div>
          <span className="main-icon">+</span>
        </div>
      </div>
    );
}
