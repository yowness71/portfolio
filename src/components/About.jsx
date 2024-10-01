import React from "react";
import "../assets/styles/about.css";
import plus from "../assets/images/plus.svg";

const About = (props) => {
  return (
    <>
      <div className="about-container">
        <div className="left">
          <div className="title-container">
            <div className="title">Web developer </div>
            <div className="title">Graphic Designer </div>
          </div>
          <div className="name">
            I' m {props.name} {props.lname}
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
              <div className="icon"> </div>
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
