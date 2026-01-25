import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import './About.css';

// Images
import aboutImg from "../assets/img/education/students-9.webp";
import founderImg from "../assets/founder.png";

const stats = [
  { number: "15,000+", label: "Learners Impacted", icon: "bi-people" },
  { number: "500+", label: "Industry Projects", icon: "bi-briefcase" },
  { number: "50+", label: "Expert Mentors", icon: "bi-person-badge" },
  { number: "100+", label: "Hiring Partners", icon: "bi-building" },
];

const values = [
  {
    title: "Practical First",
    desc: "We prioritize hands-on projects over theoretical jargon to ensure real-world readiness.",
    icon: "bi-cpu",
  },
  {
    title: "Accessibility",
    desc: "Quality tech education shouldn't be a luxury. We keep our programs affordable for everyone.",
    icon: "bi-cash-stack",
  },
  {
    title: "Community Driven",
    desc: "Join a network of thousands of learners and professionals supporting each other.",
    icon: "bi-hub",
  },
  {
    title: "Future Ready",
    desc: "Our curriculum is constantly updated to keep pace with the rapidly evolving IT landscape.",
    icon: "bi-rocket-takeoff",
  }
];

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="about-page">
      {/* Premium Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text" data-aos="fade-right">
              <nav className="about-breadcrumbs">
                <Link to="/">Home</Link>
                <i className="bi bi-chevron-right"></i>
                <span className="current">About Us</span>
              </nav>
              <h1>We Are <span>Techackode</span></h1>
              <p className="hero-lead">
                Educating the next generation of tech leaders through practical,
                industry-aligned training programs.
              </p>
              <div className="hero-badges">
                <span className="h-badge"><i className="bi bi-shield-check"></i> ISO Certified</span>
                <span className="h-badge"><i className="bi bi-star-fill"></i> 4.9/5 Rating</span>
              </div>
            </div>
            <div className="hero-image-wrapper" data-aos="fade-left">
              <div className="image-stack">
                <img src={aboutImg} alt="Students" className="main-img" />
                <div className="img-overlay-card">
                  <span className="count">10+</span>
                  <span className="txt">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section with Glassmorphism */}
      <section className="about-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, idx) => (
              <div className="stat-card" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <div className="stat-icon"><i className={`bi ${stat.icon}`}></i></div>
                <div className="stat-info">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="our-story section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="story-content">
                <span className="section-subtitle">Since 2025</span>
                <h2 className="section-title">Bridging the Gap Between <span>Academia & Industry</span></h2>
                <p>
                  Techackode Edutech Pvt. Ltd. was founded with a singular vision: to ensure that
                  every student in India has access to the practical skills that the IT industry
                  actually demands.
                </p>
                <div className="story-features">
                  <div className="s-feature">
                    <i className="bi bi-patch-check-fill"></i>
                    <div>
                      <h4>Real-Time Learning</h4>
                      <p>Learn using the same tools and workflows used by top tech companies.</p>
                    </div>
                  </div>
                  <div className="s-feature">
                    <i className="bi bi-patch-check-fill"></i>
                    <div>
                      <h4>Outcome Driven</h4>
                      <p>Success for us is measured by your careers—internships, jobs, and projects.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="video-placeholder">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" alt="Team" />
                <div className="play-btn"><i className="bi bi-play-fill"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section (Dark) */}
      <section className="mission-vision dark-bg section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6" data-aos="fade-up">
              <div className="mv-card mission">
                <div className="mv-icon"><i className="bi bi-bullseye"></i></div>
                <h3>Our Mission</h3>
                <p>
                  To make high-quality technology education accessible, affordable,
                  and practical by delivering real-world learning experiences across
                  India.
                </p>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="mv-card vision">
                <div className="mv-icon"><i className="bi bi-eye"></i></div>
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

      {/* Core Values Section */}
      <section className="core-values section-padding">
        <div className="container">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Core Values</span>
            <h2 className="section-title">What Defines <span>Us</span></h2>
          </div>
          <div className="values-grid">
            {values.map((val, idx) => (
              <div className="value-card" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="v-icon-box"><i className={`bi ${val.icon}`}></i></div>
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Models Section */}
      <section className="learning-models section-padding light-bg">
        <div className="container">
          <div className="section-header text-center mb-5" data-aos="fade-up">
            <span className="section-subtitle">Our Models</span>
            <h2 className="section-title">How You <span>Learn</span></h2>
          </div>
          <div className="models-grid">
            <div className="model-card-modern" data-aos="fade-up">
              <div className="model-head">
                <i className="bi bi-laptop"></i>
                <h4>Online Internships</h4>
              </div>
              <p>Real project experience for students and freshers.</p>
              <ul className="model-features">
                <li><i className="bi bi-check2"></i> 4 Weeks Duration</li>
                <li><i className="bi bi-check2"></i> 20+ Tech Domains</li>
                <li><i className="bi bi-check2"></i> Live Mentorship</li>
              </ul>
            </div>
            <div className="model-card-modern" data-aos="fade-up" data-aos-delay="100">
              <div className="model-head">
                <i className="bi bi-display"></i>
                <h4>Skill Courses</h4>
              </div>
              <p>Instructor-led training for job-ready technical skills.</p>
              <ul className="model-features">
                <li><i className="bi bi-check2"></i> MERN, Data Science & AI</li>
                <li><i className="bi bi-check2"></i> Cyber Security</li>
                <li><i className="bi bi-check2"></i> UI/UX Design</li>
              </ul>
            </div>
            <div className="model-card-modern" data-aos="fade-up" data-aos-delay="200">
              <div className="model-head">
                <i className="bi bi-lightning"></i>
                <h4>Bootcamps</h4>
              </div>
              <p>Short-term intensive workshops on trending tech.</p>
              <ul className="model-features">
                <li><i className="bi bi-check2"></i> 1-3 Day Sessions</li>
                <li><i className="bi bi-check2"></i> Hands-on Sprints</li>
                <li><i className="bi bi-check2"></i> Affordable Pricing</li>
              </ul>
            </div>
            <div className="model-card-modern" data-aos="fade-up" data-aos-delay="300">
              <div className="model-head">
                <i className="bi bi-mortarboard"></i>
                <h4>LMS Platform</h4>
              </div>
              <p>Self-paced learning on our digital platform.</p>
              <ul className="model-features">
                <li><i className="bi bi-check2"></i> Recorded Content</li>
                <li><i className="bi bi-check2"></i> Student Dashboard</li>
                <li><i className="bi bi-check2"></i> Verified Certificates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership section-padding light-bg">
        <div className="container">
          <div className="founder-wrapper" data-aos="zoom-in">
            <div className="founder-card-inner">
              <div className="founder-img-box">
                <img src={founderImg} alt="C. Ranjith Kumar" />
                <div className="social-links-founder">
                  <a href="https://www.linkedin.com/in/coding-ranjith/" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                </div>
              </div>
              <div className="founder-text-box">
                <span className="f-subtitle">Leadership</span>
                <h3>C. Ranjith Kumar</h3>
                <p className="f-title">Founder & Director – Techackode Pvt. Ltd.</p>
                <div className="quote-box">
                  <i className="bi bi-quote"></i>
                  <p>
                    "We didn't just want to create another course platform. We wanted to create
                    a roadmap for students to transition into the industry with confidence
                    and competence."
                  </p>
                </div>
                <div className="f-bio">
                  <p>
                    A technology entrepreneur focused on building practical,
                    industry-driven learning ecosystems. With a strong emphasis on
                    real-time projects and skill-based education, he founded
                    Techackode Edutech to bridge the gap.
                  </p>
                </div>
                <Link to="/contact" className="btn-founder">Schedule a Mentorship Session</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="about-cta section-padding">
        <div className="container">
          <div className="cta-wrapper shadow-lg" data-aos="flip-up">
            <div className="cta-glass-content">
              <h2>Join Our Growing Community</h2>
              <p>Take the first step towards a rewarding career in technology today.</p>
              <div className="cta-action-btns">
                <Link to="/courses" className="btn-cta-main">Explore All Courses</Link>
                <Link to="/contact" className="btn-cta-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
