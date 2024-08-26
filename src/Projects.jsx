import React from "react";
import useFetchProject from "./FetchProject";

const Projects = () => {
  const { loading, projects } = useFetchProject();
  if (loading) {
    return (
      <section className="projects">
        <h4>Loading...</h4>
      </section>
    );
  }
  if (!loading) {
    return (
      <section className="projects">
        <div className="title">
          <h2>projects</h2>
          <div className="title-underline"></div>
        </div>
        <div className="projects-center">
          {projects.map((project) => {
            const { id, img, projectUrl, projectTitle } = project;
            return (
              <a
                key={id}
                href={projectUrl}
                target="_blank"
                rel="noreferrer"
                className="project"
              >
                <img src={img} alt={projectTitle} className="img" />
                <h5>{projectTitle}</h5>
              </a>
            );
          })}
        </div>
      </section>
    );
  }
};

export default Projects;
