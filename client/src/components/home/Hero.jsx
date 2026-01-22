import React from "react";

// Hero Image
import heroImg from "../../assets/img/home/hero-img.png";

const CoursesHero = () => {

  return (
    <section id="courses-hero" className="courses-hero section light-background">
      <div className="hero-content">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="hero-text">
                <h1>Learn by Doing. Get Industry Ready.</h1>
                <p>
                  Learn industry-relevant skills through live projects, expert mentorship,
                  and hands-on training. Techackode Edutech helps students and professionals
                  become job-ready with practical, outcome-driven education.
                </p>

                <div className="hero-stats">
                  <div className="stat-item">
                    <span
                      className="number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="40"
                      data-purecounter-duration="2"
                    ></span>
                    <span className="label">Learners Trained</span>
                  </div>

                  <div className="stat-item">
                    <span
                      className="number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="35"
                      data-purecounter-duration="2"
                    ></span>
                    <span className="label">Technology Domains</span>
                  </div>

                  <div className="stat-item">
                    <span
                      className="number purecounter"
                      data-purecounter-start="0"
                      data-purecounter-end="90"
                      data-purecounter-duration="2"
                    ></span>
                    <span className="label">Project Completion %</span>
                  </div>
                </div>


                <div className="hero-buttons">
                  <a href="#courses" className="btn btn-primary">
                    Explore Courses
                  </a>
                  <a href="#internships" className="btn btn-outline">
                    Apply for Internship
                  </a>
                </div>

                <div className="hero-features">
                  <div className="feature">
                    <i className="bi bi-laptop"></i>
                    <span>Live Project Training</span>
                  </div>
                  <div className="feature">
                    <i className="bi bi-person-check"></i>
                    <span>Industry Mentors</span>
                  </div>
                  <div className="feature">
                    <i className="bi bi-award"></i>
                    <span>Verified Certification</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="hero-image">
                <div className="main-image">
                  <img
                    src={heroImg}
                    alt="Techackode Edutech Learning"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>

                <div className="floating-cards">
                  <div className="course-card" data-aos="fade-up" data-aos-delay="300">
                    <div className="card-icon">
                      <i className="bi bi-code-slash"></i>
                    </div>
                    <div className="card-content">
                      <h6>Full Stack Development</h6>
                      <span>Live Projects</span>
                    </div>
                  </div>

                  <div className="course-card" data-aos="fade-up" data-aos-delay="400">
                    <div className="card-icon">
                      <i className="bi bi-shield-lock"></i>
                    </div>
                    <div className="card-content">
                      <h6>Cybersecurity</h6>
                      <span>Hands-on Labs</span>
                    </div>
                  </div>

                  <div className="course-card" data-aos="fade-up" data-aos-delay="500">
                    <div className="card-icon">
                      <i className="bi bi-cpu"></i>
                    </div>
                    <div className="card-content">
                      <h6>AI & Data Science</h6>
                      <span>Industry Use Cases</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Background Shapes */}
      <div className="hero-background">
        <div className="bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
