import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile_img from "../../assets/port (1) (1).png";
import "./Hero.css";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Halima Yasmin, </span> software engineer in India
      </h1>
      <p>I am a software engineer and also a Mern FullStack developer</p>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
