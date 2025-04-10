import React from "react";
import { motion } from "framer-motion";
import "./SkillsProgress.css";

const skills = [
  { name: "ReactJS", level: 95, color: "#61dafb" },
  { name: "NodeJS", level: 96, color: "#339933" },
  { name: "MongoDB", level: 92, color: "#47a248" },
  { name: "PHP", level: 80, color: "#777bb4" },
  { name: "Laravel", level: 80, color: "#ff2d20" },
  { name: "React Native", level: 90, color: "#306998" },
  { name: "HTML", level: 95, color: "#e34c26" },
  { name: "CSS", level: 95, color: "#1572b6" },
  { name: "JavaScript", level: 90, color: "#f7df1e" },
];

const SkillsProgress = () => {
  return (
    <div className="skills-container" id="skills">
      <h2 className="skills-title">My Skills</h2>
      {skills.map((skill, index) => (
        <div className="skill-bar-container" key={index}>
          <div className="skill-info">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-fill"
              style={{ backgroundColor: skill.color }}
              initial={{ width: "0%" }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: false }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            ></motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsProgress;

