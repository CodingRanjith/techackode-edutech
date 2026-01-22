import React from "react";
// Import your logo image
import logoImg from "../assets/img/logo/tech.png"; // Make sure the path matches your project structure

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      {/* Top Section */}
      <div className="container footer-top">
        <div className="row gy-4">
          {/* About Section */}
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src={logoImg} alt="Techackode Edutech Logo" className="logo-img" />
              <span className="sitename">Techackode Edutech</span>
            </a>
            <div className="division-info mt-2 mb-3">
              <small className="text-muted">
                A Division of Techackode Pvt. Ltd.
              </small>
            </div>
            <p className="mt-2">
              Empowering the next generation of tech leaders with hands-on education, live projects, and mentor-led training.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="https://twitter.com/Techackode_Edutech" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://facebook.com/TechackodeEdutech" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com/Techackode_Edutech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/techackode-edutech" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#hero">Home</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#about">About Us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#programs">Programs</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#testimonials">Testimonials</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Programs</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#courses">Skill-Based Courses</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#internships">Internships</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#projects">Live Projects</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#bootcamps">Bootcamps</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#lms">LMS Access</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p><strong>Techackode Edutech Pvt. Ltd.</strong></p>
            <p>Tirupati, Andhra Pradesh, India</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+91 93452 77398</span></p>
            <p><strong>Email:</strong> <span>techackode@gmail.com</span></p>
            <p className="mt-2">
              <a href="https://www.techackode.com" target="_blank" rel="noopener noreferrer" className="text-primary text-decoration-none">
                www.techackode.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container copyright text-center">
        <p>
          © <span>{new Date().getFullYear()}</span> <strong className="px-1 sitename">Techackode Edutech</strong>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
