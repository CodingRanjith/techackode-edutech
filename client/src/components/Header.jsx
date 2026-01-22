import React, { useState, useEffect } from "react";
// Import your logo image
import logoImg from "../assets/img/logo/tech.png";

const Header = () => {
  const [mobileNavActive, setMobileNavActive] = useState(false);

  useEffect(() => {
    if (mobileNavActive) {
      document.body.classList.add("mobile-nav-active");
    } else {
      document.body.classList.remove("mobile-nav-active");
    }
  }, [mobileNavActive]);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavActive(!mobileNavActive);
  };

  const closeMobileNav = () => {
    setMobileNavActive(false);
  };

  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        {/* Logo */}
        <a href="/" className="logo d-flex align-items-center">
          <img src={logoImg} alt="Techackode Edutech" className="logo-img" />
          <h1 className="sitename">Techackode Edutech</h1>
        </a>

        {/* Navigation */}
        <nav id="navmenu" className="navmenu">
          {/* Backdrop for mobile drawer */}
          <div className="mobile-nav-overlay" onClick={closeMobileNav}></div>

          <ul>
            <li>
              <a href="#hero" className="active" onClick={closeMobileNav}>
                Home
              </a>
            </li>
            <li><a href="/about" onClick={closeMobileNav}>About</a></li>
            <li><a href="/courses" onClick={closeMobileNav}>Courses</a></li>
            <li><a href="/internship" onClick={closeMobileNav}>Internships</a></li>
            <li><a href="/bootcamps" onClick={closeMobileNav}>Bootcamp</a></li>
            <li><a href="/lms" onClick={closeMobileNav}>LMS</a></li>
            <li><a href="/placement" onClick={closeMobileNav}>Placement</a></li>
            <li><a href="/contact" onClick={closeMobileNav}>Contact</a></li>
          </ul>

          {/* Mobile Toggle Icon */}
          <i
            className={`mobile-nav-toggle d-xl-none bi ${mobileNavActive ? "bi-x" : "bi-list"}`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        {/* CTA Button */}
        <a href="/enroll" className="btn-getstarted d-none d-md-block">
          Enroll Now
        </a>

      </div>
    </header>
  );
};

export default Header;
