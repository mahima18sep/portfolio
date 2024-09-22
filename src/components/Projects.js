import React from "react";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="project-list">
        <li>
          <a
            href="https://github.com/mahima18sep/project1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project 1: MERN Stack App
          </a>
          <p>A full-stack application built using the MERN stack.</p>
        </li>
        <li>
          <a
            href="https://github.com/mahima18sep/project2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project 2: Java API Backend
          </a>
          <p>An API backend service built with Java and Spring Boot.</p>
        </li>
        <li>
          <a
            href="https://github.com/mahima18sep/project3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project 3: React Portfolio
          </a>
          <p>This portfolio website built with React.js.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
