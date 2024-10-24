import React, { useState } from "react";
import "./Skill.css";
import SkillCard from "./SkillCard/SkillsCard";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const skillsData = {
    Frontend: [
      { skill: "HTML", level: "90%" },
      { skill: "CSS", level: "85%" },
      { skill: "JavaScript", level: "80%" },
    ],
    Backend: [
      { skill: "Node.js", level: "85%" },
      { skill: "Express.js", level: "80%" },
      { skill: "MongoDB", level: "75%" },
    ],
    Tools: [
      { skill: "Git", level: "85%" },
      { skill: "Docker", level: "75%" },
      { skill: "Jira", level: "70%" },
    ],
    "Soft Skills": [
      { skill: "Problem-solving", level: "80%" },
      { skill: "Collaboration", level: "85%" },
      { skill: "Attention to Detail", level: "75%" },
    ],
  };

  return (
    <div id="skills" className="skills-container">
      <div className="skill-title">
        <h1>Technical Proficiency </h1>
      </div>
      <div className="right-container">
        {Object.keys(skillsData).map((category) => (
          <div
            key={category}
            className={`category-card ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className="left-container">
        <SkillCard skills={skillsData[activeCategory]} />
      </div>
    </div>
  );
};

export default Skills;
