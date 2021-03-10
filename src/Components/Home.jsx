import React from "react";
import profile from "../Assets/images/profile.jfif";
export default function Home() {
  return (
    <div>
      <div className="home" id="home">
        <div className="home__left">
          <div>Hi,</div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            I am{" "}
            <div style={{ marginLeft: "5px", color: "#a7c5eb" }}>Samir</div>
          </div>
        </div>
        <div className="home__right">
          <img className="profile_pic" src={profile} alt="" />
        </div>
      </div>
      {/* <div>Hi,</div>
      <div>I am Samir</div> */}
    </div>
  );
}
