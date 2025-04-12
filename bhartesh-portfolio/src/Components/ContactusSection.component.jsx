import React from "react";

const ContactSection = () => {
  return (
    <section
      className="contactus-section text-center mt-5 mb-5"
      id="contactme-section"
    >
      <div className="container">
        <span className="text-white text-uppercase main-text">
          Get Connected
        </span>
        <h2 className="text-green fw-bold mb-5">Contact Me</h2>

        <div className="row justify-content-center text-center">
          <div className="col-md-6 col-lg-4 col-xl-3 bg-dark-blue rounded-5 mb-4 mx-3 card-hover glow">
            <div className="card w-100 text-white">
              <div className="card-body">
                <i
                  className="fas fa-map-marker-alt fa-2x mb-2 text-green"
                  aria-label="Location"
                ></i>
                <p className="card-text">
                  Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi,
                  Pune, Pimpri-Chinchwad, Maharashtra 411057
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 bg-dark-blue rounded-5 mb-4 mx-3 card-hover glow">
            <div className="card w-100 text-white">
              <div className="card-body">
                <i
                  className="fas fa-phone fa-2x mb-2 text-green"
                  aria-label="Phone"
                ></i>
                <p className="card-text">+91 9503042573</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 col-xl-3 bg-dark-blue rounded-5 mb-4 mx-3 card-hover glow">
            <div className="card w-100 text-white">
              <div className="card-body">
                <i
                  className="fas fa-envelope fa-2x mb-2 text-green"
                  aria-label="Email"
                ></i>
                <p className="card-text">
                  <a
                    href="mailto:girmalbhartesh9178@example.com"
                    className="text-white text-decoration-none"
                  >
                    girmalbhartesh9178@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-auto">
            <a
              href="https://github.com/BharteshGirmal"
              target="_blank"
              className="text-decoration-none text-green mx-2"
              aria-label="GitHub"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
          <div className="col-auto">
            <a
              href="https://linkedin.com/in/bhartesh-girmal/"
              target="_blank"
              className="text-decoration-none text-green mx-2"
              aria-label="LinkedIn"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
