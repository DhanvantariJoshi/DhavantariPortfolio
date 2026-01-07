import React from "react";
import "../CssComponent/Home.css";

const Home = () => {
  const handleResumeClick = () => {
    // Replace with real PDF path
    window.open("/Dhanvantari Joshi_Resume.pdf", "_blank");
  };

  return (
    <section className="home">
      <h1 className="home-name">Dhanvantari Joshi</h1>
      <h2 className="home-role">Java Developer | Spring Boot | REST APIs | Microservices | MySQL | AWS </h2>
      <p className="home-intro">
        Java developer focused on building secure, scalable applications.
      </p>
      <p className="home-intro">
        Recently upskilled in React to collaborate better with frontend teams.
      </p>
      <div className="home-actions">
        <button className="btn-primary" onClick={handleResumeClick}>Download Resume</button>
        <a
          href="https://github.com/DhanvantariJoshi"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/dhanvantari-joshi-489035199"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Home;
