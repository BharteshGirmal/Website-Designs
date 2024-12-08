import React, { useContext } from "react";
import { ContextAPI } from "../Context/ContextApi";

const TechnologySection = () => {
  const { technologies } = useContext(ContextAPI);

  return (
    <section className="technology-icons py-5" id="technology-section">
      <div className="container">
        <h2 className="text-center text-green fw-bold mb-5">
          Industry Technologies
        </h2>
        <div className="row g-4 justify-content-center">
          {technologies.map((tech, index) => (
            <div
              className="col-6 col-sm-4 col-md-3 col-lg-2 d-flex justify-content-center"
              key={index}
            >
              <div
                className={`tech-icon bg-dark-blue text-green glow rounded-2 hover-effect d-flex align-items-center justify-content-center flex-column p-3`}
              >
                <i className={`${tech.icon} ${tech.color}`} />
                <p className="mt-2 text-gray">{tech.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
