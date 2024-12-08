import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section d-flex align-items-center" id="home">
      <div className="container">
        <div className="row align-items-center mt-4 gap-lg-0">
          {/* Text and Intro */}
          <div className="col-lg-6">
            <span className="text-white text-uppercase main-text">
              Hello I'm
            </span>
            <h1 className="text-white fw-bold">
              Web Designer & <span className="text-green">Developer</span>
            </h1>
            <p className="text-gray mt-4 mb-4 para">
              A dedicated Front-End Developer with expertise in building
              interactive, responsive, and user-focused web applications.
              Proficient in technologies like React.js, JavaScript, HTML5, CSS3,
              and Bootstrap, I bring a strong foundation in Core and Advanced
              Java for developing full-stack applications. My experience
              includes optimizing application performance and delivering
              seamless functionality to enhance user experience. Known for
              attention to detail and problem-solving, I aim to create efficient
              and scalable solutions that align with project goals.
            </p>
            <a
              className="btn mybtn rounded-0 text-uppercase bg-green"
              href="#work-section"
              role="button"
            >
              View Experience
            </a>
          </div>

          {/* Image Section */}
          <div className="col-lg-6">
            <div
              className="image-container mx-auto"
              alt="Web Developer and Designer"
              role="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
