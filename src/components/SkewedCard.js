import React from "react";
import "./styles/SkewedCard.css";
import card_1 from "../Images/card-1.svg";
import card_2 from "../Images/card-2.svg";
import card_3 from "../Images/card-3.svg";


export default function SkewedCard() {
  return (
    <div className="container">
      <div className="cardContainer">
        <div className="card">
          <h3 className="title">CREATIVITY</h3>
          <img src={card_1} alt="" />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            optio enim incidunt tempora natus laudantium non corrupti ipsa id,
            aperiam
          </span>
        </div>
        <div className="card">
          <h3 className="title">REGULARITY</h3>
          <img src={card_2} alt="" />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            optio enim incidunt tempora natus laudantium non corrupti ipsa id,
            aperiam
          </span>
        </div>
        <div className="card">
          <h3 className="title">PRODUCTIVITY</h3>
          <img src={card_3} alt="" />
          <span className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            optio enim incidunt tempora natus laudantium non corrupti ipsa id,
            aperiam
          </span>
        </div>
      </div>
    </div>
  );
}
