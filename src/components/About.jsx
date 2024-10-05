import React from "react";
import "../assets/styles/about.css";
import plus from "../assets/images/plus.svg";
import copy from "../assets/images/copy.svg";
import pfp from "../assets/images/picture1.jpg";

const About = (props) => {
  function copyfuction() {
    const email = "boukrayounes69@gmail.com";
    navigator.clipboard.writeText(email);
  }
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
            <span className="about">
              im a software developer web/mobile and designer
            </span>
            <span className="university">
              university of Abd El Hamid Ibn Badis Mostaganem
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
            <button onClick={copyfuction} className="email">
              <div className="text">email</div>
              <div className="spacer"></div>
              <div className="icon">
                <img src={copy} alt="" />
              </div>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="active">
            <div className="active-dot"></div>
            <span className="active-text">Available for job</span>
          </div>
          <div className="picture">
            <img src={pfp} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
