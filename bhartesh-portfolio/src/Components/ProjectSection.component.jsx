import React, { useContext } from "react";
import { ContextAPI } from "../Context/ContextApi";

const ProjectSection = () => {
  const { projects } = useContext(ContextAPI);

  return (
    <section className="project-section text-center py-5" id="project-section">
      <h2 className="text-green fw-bold mb-5">Projects Completed</h2>
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card glow bg-dark-blue w-100 rounded-4">
                <div className="image-container2">
                  <img
                    src={project.imageSrc}
                    className="card-img-top"
                    alt={project.altText}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-white">{project.title}</h5>
                  <p className="card-text text-gray">{project.description}</p>
                  <a
                    className="btn mybtn rounded-0 text-uppercase bg-green"
                    href={project.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    role="button"
                  >
                    {project.title === "E-Quiz Web Application"
                      ? "View Code"
                      : "Preview"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
