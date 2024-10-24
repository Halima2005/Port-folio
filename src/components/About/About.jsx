import React from "react";
import profile_img from "../../assets/port (1) (1).png";
import theme_pattern from "../../assets/theme_pattern.svg";
import "./About.css";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit assumenda voluptas ea dignissimos esse delectus,
              voluptates ad voluptate quisquam aut eum quidem impedit harum
              facilis culpa exercitationem laboriosam facere praesentium?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Eligendi, necessitatibus?
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS </p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS </p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript </p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Next JS </p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
