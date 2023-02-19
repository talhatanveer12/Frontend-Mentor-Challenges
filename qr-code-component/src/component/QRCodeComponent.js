import React from "react";
import "./style.css";

export default function QRCodeComponent() {
  return (
    <div className="container">
      <div className="container-body">
        <img src="./assets/images/image-qr-code.png" alt="QRImage" />
        <h1>Improve your front-end skills by building projects</h1>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/talhatanveer12" target="_blank" rel="noreferrer">Talha Tanveer</a>.
      </div>
    </div>
  );
}
