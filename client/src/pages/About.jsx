import React from "react";
import { Link } from "react-router-dom";

// Images
import aboutImg from "../assets/img/education/students-9.webp"; // Using as placeholder
import founderImg from "../assets/founder.png"; // Founder Image

export default function About() {
  return (
    <div className="about-page">
      {/* Page Title */}
      <div className="page-title">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">About Us</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* About Overview Section */}
      <section id="about-overview" className="section about-details">
        <div className="container">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <img src={aboutImg} className="img-fluid" alt="About Techackode" />
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <span className="subtitle text-uppercase text-muted fw-bold mb-2 d-block">
                Who We Are
              </span>
              <h2 className="mb-3 fw-bold display-6">
                Real-Time Learning for Real Careers
              </h2>
              <p className="lead mb-4 text-secondary">
                Techackode Edutech Pvt. Ltd. is the education and training division
                of Techackode Pvt. Ltd., focused on delivering practical,
                industry-aligned technology education for students and working
                professionals across India.
              </p>
              <p className="mb-4">
                Founded in 2025, Techackode Edutech was created to bridge the
                growing gap between academic learning and real-world IT industry
                requirements. Our programs emphasize hands-on projects, real-time
                tools, and mentor-led learning to help learners build job-ready
                skills.
              </p>
              <p>
                We believe education should be affordable, practical, and
                outcome-driven, enabling learners to confidently step into
                internships, jobs, and real projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="mission-card">
                <i className="bi bi-bullseye"></i>
                <h3>Our Mission</h3>
                <p>
                  To make high-quality technology education accessible, affordable,
                  and practical by delivering real-world learning experiences across
                  India.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="vision-card">
                <i className="bi bi-eye"></i>
                <h3>Our Vision</h3>
                <p>
                  To empower students and professionals with hands-on learning and
                  industry-ready skills through innovative online and offline
                  education programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section">
        <div className="container">
          <div className="founder-section">
            <div className="row align-items-center gy-4">
              <div className="col-lg-4 text-center" data-aos="zoom-in">
                <img
                  src={founderImg}
                  alt="C. Ranjith Kumar"
                  className="founder-img"
                />
              </div>
              <div className="col-lg-8 founder-content" data-aos="fade-up">
                <span className="subtitle">Founder & Leadership</span>
                <h3>C. Ranjith Kumar</h3>
                <h4>Founder & Director – Techackode Pvt. Ltd.</h4>
                <p className="mt-3">
                  A technology entrepreneur focused on building practical,
                  industry-driven learning ecosystems. With a strong emphasis on
                  real-time projects and skill-based education, he founded
                  Techackode Edutech to bridge the gap between academic learning and
                  real-world IT requirements.
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.linkedin.com/in/coding-ranjith/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm rounded-pill px-4"
                  >
                    <i className="bi bi-linkedin me-2"></i> Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Features */}
      <section className="section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>What Makes Us Different</h2>
          <p>We focus on outcome-driven education that delivers results.</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            {[
              {
                title: "Project-Based Learning",
                desc: "Instead of theory-only teaching, we focus on live projects.",
                icon: "bi-laptop",
              },
              {
                title: "Affordable Pricing",
                desc: "High-quality education accessible to students from all backgrounds.",
                icon: "bi-cash-coin",
              },
              {
                title: "Industry Mentors",
                desc: "Learn directly from experienced professionals and experts.",
                icon: "bi-person-badge",
              },
              {
                title: "Live Internships",
                desc: "Gain real-time experience with internships and client projects.",
                icon: "bi-briefcase",
              },
              {
                title: "Placement Guidance",
                desc: "Career-focused courses with dedicated placement support.",
                icon: "bi-graph-up-arrow",
              },
              {
                title: "Hybrid Learning",
                desc: "Flexible online and offline learning modes to suit your needs.",
                icon: "bi-wifi",
              },
            ].map((feature, index) => (
              <div
                className="col-lg-4 col-md-6"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-card h-100">
                  <div className="icon-wrapper">
                    <i className={`bi ${feature.icon}`}></i>
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaning Models */}
      <section className="section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Learning Models</h2>
          <p>Structured programs designed for every stage of your career.</p>
        </div>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 col-md-6" data-aos="fade-up">
              <div className="learning-model-card">
                <h4>Online Internships</h4>
                <p>
                  Designed for students and freshers who want real project
                  experience instead of certificate-only internships.
                </p>
                <ul className="model-list">
                  <li><i className="bi bi-clock"></i> Duration: 4 Weeks</li>
                  <li><i className="bi bi-code-slash"></i> 20+ Technology Domains</li>
                  <li><i className="bi bi-laptop"></i> Live Project-Based Learning</li>
                  <li><i className="bi bi-patch-check"></i> Verified Internship Certificate</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="learning-model-card">
                <h4>Skill-Based Courses</h4>
                <p>
                  Instructor-led courses designed to develop job-ready technical
                  skills through structured learning and guided practice.
                </p>
                <ul className="model-list">
                  <li><i className="bi bi-display"></i> Web & Mobile Development</li>
                  <li><i className="bi bi-robot"></i> AI, ML & Data Science</li>
                  <li><i className="bi bi-shield-lock"></i> Cybersecurity & Ethical Hacking</li>
                  <li><i className="bi bi-pencil-square"></i> UI/UX Design & Marketing</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="learning-model-card">
                <h4>Bootcamps & Workshops</h4>
                <p>
                  Short-term bootcamps and workshops on trending technologies to
                  help learners explore new skills quickly.
                </p>
                <ul className="model-list">
                  <li><i className="bi bi-calendar-event"></i> 1-Day or Weekend Programs</li>
                  <li><i className="bi bi-bar-chart"></i> Beginner to Advanced Topics</li>
                  <li><i className="bi bi-wallet2"></i> Affordable Entry-Level Pricing</li>
                  <li><i className="bi bi-award"></i> Certification on Completion</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="learning-model-card">
                <h4>LMS Platform</h4>
                <p>
                  Our digital learning platform designed for self-paced and
                  structured online education.
                </p>
                <ul className="model-list">
                  <li><i className="bi bi-play-circle"></i> Recorded Video Courses</li>
                  <li><i className="bi bi-speedometer2"></i> Student Dashboards & Tracking</li>
                  <li><i className="bi bi-mortarboard"></i> Digital Certificates</li>
                  <li><i className="bi bi-phone"></i> Accessible Anytime, Anywhere</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join & Commitment */}
      <section className="section light-background">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6" data-aos="fade-right">
              <h3>🌍 Who Can Join?</h3>
              <p className="mb-4">
                Our programs are open to anyone with a passion for learning and technology.
              </p>
              <ul className="list-unstyled">
                {[
                  "College Students",
                  "Fresh Graduates",
                  "Working Professionals",
                  "Career Switchers",
                  "Freelancers and Entrepreneurs",
                ].map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-primary me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h3>📈 Our Commitment</h3>
              <p className="mb-4">At Techackode Edutech, we are committed to:</p>
              <ul className="list-unstyled">
                {[
                  "Delivering outcome-focused education",
                  "Maintaining transparency and trust",
                  "Continuously updating our curriculum",
                  "Supporting learners beyond course completion",
                ].map((item, idx) => (
                  <li key={idx} className="mb-2 d-flex align-items-center">
                    <i className="bi bi-heart-fill text-danger me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Support CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-section">
            <div className="cta-content">
              <h3>Career & Placement Support</h3>
              <p>
                We provide structured career support to help learners transition
                into the IT industry, including resume building, mock interviews,
                and hiring connections.
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="btn-cta-primary">
                  Get in Touch
                </Link>
                <Link to="/courses" className="btn-cta-secondary">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
