import React from 'react'
import { FaPhoneVolume } from "react-icons/fa";

import "./styles/RingPhone.css";
export default function RingPhone() {
    return (
      <div className="container">
        <div className="phone">
          <FaPhoneVolume className="icon"/>
        </div>
      </div>
    );
}
