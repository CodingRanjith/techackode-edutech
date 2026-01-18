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
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src={logoImg} alt="Techackode Edutech Logo" className="logo-img me-2" />
              <span className="sitename">Techackode Edutech</span>
            </a>
            <div className="division-info mt-1">
              <small>
                Division of Techackode Pvt. Ltd. | 
                <a href="https://www.techackode.com" target="_blank" rel="noopener noreferrer" className="ms-1">
                  www.techackode.com
                </a>
              </small>
            </div>
            <p className="mt-3">
              Techackode Edutech Pvt. Ltd. delivers hands-on technology education
              with live projects, internships, and mentor-led courses to help learners
              become job-ready and confident in the IT industry.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="https://twitter.com/Techackode_Edutech" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://facebook.com/TechackodeEdutech" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://instagram.com/Techackode_Edutech" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com/company/techackode-edutech" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg-2 col-6 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-lg-2 col-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><a href="#courses">Skill-Based Courses</a></li>
              <li><a href="#internships">Online Internships</a></li>
              <li><a href="#projects">Live Projects</a></li>
              <li><a href="#bootcamps">Bootcamps & Workshops</a></li>
              <li><a href="#lms">Techackode LMS</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>Techackode Edutech Pvt. Ltd.</p>
            <p>Tirupati, Andhra Pradesh</p>
            <p>India</p>
            <p className="mt-4"><strong>Phone:</strong> <span>+91 93452 77398</span></p>
            <p><strong>Email:</strong> <span>techackode@gmail.com</span></p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>2025</span> <strong className="px-1 sitename">Techackode Edutech</strong> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
