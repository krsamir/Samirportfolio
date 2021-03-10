import React from "react";
import "../Assets/style.css";
export default function NavBar() {
  return (
    <div>
      <div className="nav__top">
        {/* <div className="nav__left">Samir</div> */}
        <a className="nav__left" href="#home">
          Samir
        </a>
        <div className="nav__right">
          {/* <div className="nav__right__text">Home</div> */}
          <a className="nav__right__text" href="#home">
            Home
          </a>
          <a className="nav__right__text" href="#about">
            About
          </a>
          {/* <div className="nav__right__text">Skills</div> */}
          <a className="nav__right__text" href="#skills">
            skills
          </a>
        </div>
      </div>
    </div>
  );
}
