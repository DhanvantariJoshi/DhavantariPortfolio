import React from "react";
import {
  assamSeedsProject,
  TestAutoGeneratorSolution,
  portfolioProject
} from "../Data/projects";
import "../CssComponent/Projects.css";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h3>{project.name}</h3>

    <p className="project-tech">
      <strong>Tech:</strong> {project.tech.join(", ")}
    </p>

    <ul className="project-description">
      {project.description.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>

  </div>
);

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        <ProjectCard project={assamSeedsProject} />
        <ProjectCard project={TestAutoGeneratorSolution} />
        <ProjectCard project={portfolioProject} />
      </div>
    </section>
  );
};

export default Projects;
