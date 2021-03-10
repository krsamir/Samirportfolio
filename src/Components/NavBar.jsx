import React from "react";
import "../Assets/style.css";
export default function NavBar() {
  return (
    <div>
      <div className="nav__top">
        <div className="nav__left">Samir</div>
        <div className="nav__right">
          <div className="nav__right__text">Home</div>
          {/* <a
            className="nav__right__text"
            href="#skills"
            style={{ textDecoration: "none" }}
          >
            skills
          </a> */}
          <div className="nav__right__text">About</div>
          <div className="nav__right__text">Skills</div>
        </div>
      </div>
    </div>
  );
}
