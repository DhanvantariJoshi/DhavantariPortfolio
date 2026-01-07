import React from "react";
import { experience } from "../Data/experience";
import "../CssComponent/Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experience.map((exp) => (
          <div key={exp.company} className="experience-card">
            <h3>{exp.company}</h3>
            <p className="experience-role">{exp.role}</p>
            <ul>
              {exp.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
