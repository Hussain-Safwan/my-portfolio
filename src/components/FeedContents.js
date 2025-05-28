import React from "react";
import { news, publications, projects } from "../data";

const FeedContents = () => {
  return (
    <div className="feed-contents">
      <div className="intro">
        <p>Hello, I am Hussain Md. Safwan.</p>
        <p>
          I work as a Senior Software Engineer at{" "}
          <a href="https://research.samsung.com/srbd">
            Samsung R&D Institute Bangladesh
          </a>
          , currently contributing to the{" "}
          <a href="https://samsungmedison.com/">Medison</a> project focused on
          Ultrasound Imaging. My role involves acquiring ultrasound streams from
          the machine, processing them through media servers, and delivering the
          refined output to client applications.
        </p>
        <p>
          Beyond my development work, I am an active member of our research task
          force, with a strong interest and hands-on experience in Computer
          Vision. I am also open to exploring other areas within machine
          learning.
        </p>
        <p>
          I have received my bachelor's degree from the{" "}
          <a href="https://www.du.ac.bd/body/CSE">
            Department of Computer Science and Engineering, University of Dhaka.
          </a>
        </p>
      </div>

      <div className="section news">
        <h2 className="header">News</h2>

        <div className="list ls-news">
          {news.map((item, i) => (
            <div
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank");
                }
              }}
              title={item.tooltip}
              className={`item item-news ${i % 2 === 0 ? "" : "light"}`}
            >
              <strong>{`[${item.date}]`}</strong>
              <span>{item.content}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section publications">
        <h2 className="header">Publications</h2>

        <div className="list ls-news">
          {publications.map((item) => (
            <div
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank");
                }
              }}
              title={item.tooltip}
              className="item item-pub"
            >
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section projects">
        <h2 className="header">Projects</h2>

        <div className="list ls-news">
          {projects.map((item, i) => (
            <div
              onClick={() => {
                if (item.link) {
                  window.open(item.link, "_blank");
                }
              }}
              className={`item item-pro ${i % 2 === 0 ? "" : "light"}`}
              title={item.tooltip}
            >
              <div className="project-header">
                <h4>{item.title}</h4>
                <span>{item.date}</span>
              </div>
              <div
                style={{
                  lineHeight: "20px",
                  paddingBottom: "5px",
                  color: "#ccc",
                }}
              >
                <i>{item.content}</i>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section contacts" id="contacts">
        <h2 className="header">Contacts</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            lineHeight: "22.5px",
          }}
        >
          <span>
            <strong>Samsung R&D Institute Bangladesh</strong>
          </span>
          <span>111 Bir Uttam CR Dutta Road, Dhaka 1207</span>
          <span>
            Email:
            <a href="mailto:safwan.du16@gmail.com">safwan.du16@gmail.com</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FeedContents;
