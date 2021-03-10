import React from "react";

export default function About() {
  return (
    <div>
      <div className="about" id="about">
        <div className="about__heading">
          <div style={{ borderBottom: "4px solid #a7c5eb" }}>About</div>
        </div>
        <div
          className="about__body"
          style={{
            marginLeft: "10px",
            fontSize: "3 rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div className="about__paragraph">
            <p>
              I am a Final year Computer science undergraduate from S'O'A
              University, Bhubaneswar.
            </p>
            {/* <p>
              I am a Final year Computer science undergraduate from S'O'A
              University, Bhubaneswar.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
