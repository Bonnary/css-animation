import React from 'react'
import "./styles/HeartBeat.css";
import heart from "../Images/heart.png"
export default function HeartBeat() {
    return (
        <div className="container">
            <img src={heart} alt="" />
        </div>
    )
}
