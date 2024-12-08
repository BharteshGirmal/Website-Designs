import React, { useContext } from "react";
import { ContextAPI } from "../Context/ContextApi";

// Reusable CertificateCard Component
const CertificateCard = ({ imgSrc, altText, title, institution, period }) => {
  return (
    <div className="row mt-4 mb-4 py-3 bg-dark-blue rounded-4 glowCrt">
      <div className="col-lg-2 d-flex justify-content-center">
        <div className="certificate-img d-flex align-items-center gap-2 gap-lg-0">
          <img src={imgSrc} alt={altText} />
        </div>
      </div>
      <div className="col-lg-10 text-start align-self-center">
        <h5 className="text-green">{title}</h5>
        {period ? (
          <span className="text-gray main-text">{period}</span>
        ) : (
          <span className="text-gray main-text">{institution}</span>
        )}
      </div>
    </div>
  );
};

const CertificateSection = () => {
  const { certificates } = useContext(ContextAPI);

  return (
    <section
      className="certificate-section text-center"
      id="certification-section"
    >
      <h2 className="text-green fw-bold mb-5">Certifications</h2>
      <div className="container gap-5 gap-lg-0 my-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="certificate-logo glow"></div>
          </div>
          <div className="col-lg-6 mb-4 certification">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                imgSrc={cert.imgSrc}
                altText={cert.altText}
                title={cert.title}
                institution={cert.institution}
                period={cert.period}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
