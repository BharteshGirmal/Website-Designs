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
              Software <span className="text-green">Developer</span>
            </h1>
            <p className="text-gray mt-4 mb-4 para">
              A passionate Full-Stack Developer with 3 years of experience
              building scalable, responsive, and high-performance web
              applications. Skilled in React.js, TypeScript, JavaScript (ES6+),
              Redux, and modern UI frameworks like Bootstrap and Tailwind CSS.
              Experienced in optimizing React components with lazy loading and
              code splitting to improve load times, integrating REST APIs, and
              implementing CI/CD pipelines using Jenkins, Docker, and AWS. Adept
              at mentoring, collaborating in Agile teams, and delivering clean,
              maintainable code to create seamless user experiences.
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
