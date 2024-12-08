import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap Styles

const FooterSection = () => {
  return (
    <footer className="footer-section mt-3 mb-3">
      <div className="container">
        <div className="row">
          {/* Social Media Links Section */}
          <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center mb-3 mb-lg-0">
            <a href="#" className="text-green mx-2">
              <i className="fa-brands fa-apple fs-5"></i>
            </a>
            <a href="#" className="text-green mx-2">
              <i className="fa-brands fa-windows fs-5"></i>
            </a>
            <a href="#" className="text-green mx-2">
              <i className="fa-brands fa-android fs-5"></i>
            </a>
          </div>

          {/* Copyright Section */}
          <div className="col-lg-6 text-gray text-lg-end text-center">
            <p className="mb-0">Copyright &copy; 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
