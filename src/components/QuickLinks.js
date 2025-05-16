import React from "react";
import Image from "../me.png";

const QuickLinks = (props) => {
  return (
    <div className="quick-links">
      <div className="ql-contents">
        <div className="upper-main">
          <img className="me-image" src={Image} />
          <h2 className="name">Hussain Md. Safwan</h2>
          <div className="name-sub">
            <p>Senior Software Engineer</p>
            <p>Medison, Samsung Research</p>
          </div>
        </div>
        <hr style={{ border: "0.1px solid #333" }} />
        <div className="lower-links">
          <div className="row">
            <a href="">Resume</a>
          </div>
          <div className="row">
            <a href="">LinkedIn</a>
          </div>
          <div className="row">
            <a href="">GitHub</a>
          </div>
          <div className="row">
            <a href="">Medium</a>
          </div>
          <div className="row">
            <a href="">LeetCode</a>
          </div>
          <div className="row">
            <a href="">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
