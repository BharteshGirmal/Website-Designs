import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS Styles
import MyContextAPI, { ContextAPI } from "../Context/ContextApi";

// Reusable ExperienceCard Component
const ExperienceCard = ({ title, role, duration, items }) => {
  return (
    <div className="col-lg-6 d-flex flex-column">
      <span className="text-white text-uppercase main-text">{title}</span>
      <h2 className="text-green fw-bold">Tata Technologies</h2>
      <h5 className="text-white">{role}</h5>
      <p className="text-green italic">{duration}</p>
      <ul className="itemlist mt-4 mb-4">
        {items.map((item, index) => (
          <li key={index} className="item text-gray para">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const WorkSection = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS for animations
  }, []);

  const { experienceData } = useContext(ContextAPI);

  return (
    <section id="work-section" className="my-5">
      <div className="container">
        <div className="row align-items-start gap-5 gap-lg-0">
          {experienceData.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              role={experience.role}
              duration={experience.duration}
              items={experience.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
