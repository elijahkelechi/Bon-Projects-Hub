import React from "react";
import useFetchProject from "./FetchProject";

const Projects = () => {
  const { loading, projects } = useFetchProject();

  // Inline CSS styles for the loading spinner animation
  const spinnerStyle = {
    display: "inline-block",
    width: "50px",
    height: "50px",
    border: "4px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "50%",
    borderTopColor: "#3498db", // Change to your desired color
    animation: "spin 1s linear infinite",
  };

  // Keyframes for the spinner animation
  const spinnerKeyframes = `
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  `;

  // Inline CSS styles for centering the loading section
  const loadingContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full viewport height
  };

  return (
    <section className="projects">
      {loading ? (
        <div style={loadingContainerStyle}>
          <style>{spinnerKeyframes}</style> {/* Add keyframes to the DOM */}
          <div style={spinnerStyle}></div>
          <h4>Loading...</h4>
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </section>
  );
};

export default Projects;
