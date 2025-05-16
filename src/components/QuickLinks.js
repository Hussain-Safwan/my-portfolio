import React, { useState } from "react";
import Image from "../me.png";

const QuickLinks = (props) => {
  const showExpandBtn = window.innerWidth < 480;
  const [showLinks, setShowLinks] = useState(!showExpandBtn);

  const toggleLinks = () => {
    setShowLinks((prev) => !prev);
  };

  return (
    <div className="quick-links">
      <div className="ql-contents">
        <div className="upper-main">
          <div className="image">
            <img className="me-image" src={Image} />
          </div>
          <h2 className="name">Hussain Md. Safwan</h2>
          <div className="name-sub">
            <p>Senior Software Engineer</p>
            <p>Medison, Samsung Research</p>
          </div>
        </div>
        <hr style={{ border: "0.1px solid #333" }} />
        {showExpandBtn && (
          <div onClick={toggleLinks}>
            <h4>Quick Links</h4>
          </div>
        )}
        {showLinks && (
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
        )}
      </div>
    </div>
  );
};

export default QuickLinks;
