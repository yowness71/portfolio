import React from "react";
import "../assets/styles/about.css";
import plus from "../assets/images/plus.svg";
import copy from "../assets/images/copy.svg";

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <div className="left">
          <div className="title-container">
            <div className="title">Web developer </div>
            <div className="title">Graphic Designer </div>
          </div>
          <div className="name-container">
            <span className="name">
              I' m {props.name} {props.lname}
            </span>
            <span className="about">im a software developer web/mobile</span>
            <span className="university">
              university of abd el hamid ibn badis Mostaganem
            </span>
          </div>
          <div className="buttons">
            <button className="hire">
              <div className="text">Hire me</div>
              <div className="spacer"></div>
              <div className="icon">
                <img src={plus} alt="" />
              </div>
            </button>
            <button className="email">
              <div className="text">Copy email</div>
              <div className="spacer"></div>
              <div className="icon">
                <img src={copy} alt="" />
              </div>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="title">Web developer </div>
          <div className="title">Graphicpqspqzkpc Designer </div>
        </div>
      </div>
    </>
  );
};

export default About;
