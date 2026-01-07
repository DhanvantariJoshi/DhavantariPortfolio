import React from "react";
import { skills } from "../Data/skills";
import "../CssComponent/Skills.css";

const SkillCategory = ({ title, items }) => (
  <div className="skill-card">
    <h3 className="skill-title">{title}</h3>
    <div className="skill-badges">
      {items.map((item) => (
        <span key={item} className="skill-badge">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section className="skills-container">
      <h2>My Skills</h2>

      <div className="skills-grid">
        <SkillCategory title="Languages" items={skills.languages} />
        <SkillCategory title="Frameworks" items={skills.frameworks} />
        <SkillCategory title="Concepts" items={skills.concepts} />
        <SkillCategory title="Tools" items={skills.tools} />
        <SkillCategory title="Databases" items={skills.databases} />
        <SkillCategory title="Version Control" items={skills.versionControl} />
        <SkillCategory title="Other" items={skills.other} />
      </div>
    </section>
  );
};

export default Skills;
