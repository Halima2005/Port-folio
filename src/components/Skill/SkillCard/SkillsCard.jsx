import React from "react";
import "./SkillsCard.css";
const SkillCard = ({ skills }) => {
  return (
    <div className="skill-card">
      <h3>
        {skills[0]?.skill
          ? skills[0].skill.split(" ")[0] + " Skills"
          : "Skills"}
      </h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>
            <span className="skill-skill">{skill.skill}</span>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: skill.level }}></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
