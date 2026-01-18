import React from "react";

const CTASection = () => {
  return (
    <div className="cta-section" data-aos="zoom-in" data-aos-delay="300">
      {/* CTA Content */}
      <div className="cta-content">
        <span className="cta-label">
          <i className="bi bi-lightning-charge-fill"></i> Ready to Learn & Grow?
        </span>
        <h3>Kickstart Your Tech Career with Real Projects</h3>
        <p>
          Join Techackode Edutech and gain hands-on experience through live projects, online internships, and mentor-led courses designed to make you job-ready.
        </p>
        <div className="cta-buttons">
          <a href="#programs" className="btn-cta-primary">
            Explore Programs <i className="bi bi-arrow-right"></i>
          </a>
          <a href="#contact" className="btn-cta-secondary">
            <i className="bi bi-envelope-fill"></i> Contact Us
          </a>
        </div>
      </div>

      {/* Decorative Floating Shapes */}
      <div className="cta-decoration">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    </div>
  );
};

export default CTASection;
