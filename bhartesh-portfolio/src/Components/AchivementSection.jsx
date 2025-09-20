import React, { useContext } from "react";
import { ContextAPI } from "../Context/ContextApi";

const CertificateCard = ({ title, company, description }) => (
  <div
    className="bg-dark-blue rounded-4 glowCrt p-4 md:p-5 shadow-md hover:shadow-lg
               transition-all duration-300 hover:-translate-y-1"
  >
    <h5 className="text-green fw-bold mb-2">{title}</h5>

    {company && (
      <p className="text-gray main-text mb-1 fw-semibold">{company}</p>
    )}

    {description && <p className="text-gray  mb-0">{description}</p>}
  </div>
);

const AchievementSection = () => {
  const { awards } = useContext(ContextAPI);

  return (
    <section
      id="certification-section"
      className="certificate-section py-5 px-3 text-center"
    >
      <h2 className="text-green fw-bold mb-5">Achievements</h2>

      {awards?.length > 0 ? (
        <div className="container">
          <div className="row g-4 justify-content-center">
            {awards.map((item, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <CertificateCard
                  title={item.title}
                  company={item.company}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray">
          No achievements or certifications to display.
        </p>
      )}
    </section>
  );
};

export default AchievementSection;
