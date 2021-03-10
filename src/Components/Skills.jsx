import React from "react";
import "../Assets/style.css";

// import "../Assets/App.css";
export default function Skills() {
  return (
    <div>
      <div className="skills" id="skills">
        <div className="skills__heading">Top Skills</div>
        <ul>
          <li>Machine Learning</li>
          <li>React js</li>
          <li>Fullstack web Devlopment (MERN-Stack)</li>
        </ul>
        <div className="skills__heading">Tools and Technologies</div>
        <ul>
          <li>Redux</li>
          <li>Open cv</li>
          <li>Streamlit</li>
          <li>DBMS</li>
          <li>Creating virtual tours using unity</li>
        </ul>
      </div>
    </div>
  );
}
