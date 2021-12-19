import React from "react";
import "./styles/AnimatedPayButton.css";
export default function AnimatedPayButton() {
  return (
    <div className="container">
      <div class="CardContainer">
        <div class="interactive-container">
          <div class="card">
            <div class="card-line"></div>
            <div class="card-circles">
              <div class="card-circle"></div>
              <div class="card-circle"></div>
              <div class="card-circle"></div>
            </div>
          </div>
          <div class="post">
            <div class="post-line"></div>
            <div class="post-screen">
              <span class="post-text">$</span>
            </div>
            <div class="post-numbers">
              <div class="post-number"></div>
              <div class="post-number"></div>
              <div class="post-number"></div>
              <div class="post-number"></div>
              <div class="post-number"></div>
              <div class="post-number"></div>
            </div>
          </div>
        </div>
        <div class="text-container">Pay Now!</div>
      </div>
    </div>
  );
}
