import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// Import images
import heroImg from "../assets/img/home/hero-img.png";
import students9 from "../assets/img/education/students-9.webp";
import campus4 from "../assets/img/education/campus-4.webp";
import students7 from "../assets/img/education/students-7.webp";
import personF3 from "../assets/img/person/person-f-3.webp";
import personM5 from "../assets/img/person/person-m-5.webp";
import personF7 from "../assets/img/person/person-f-7.webp";
import personM3 from "../assets/img/person/person-m-3.webp";
import personF9 from "../assets/img/person/person-m-9.webp";
import personM9 from "../assets/img/person/person-m-11.webp";
import personM11 from "../assets/img/person/person-f-13.webp";
import personF4 from "../assets/img/person/person-m-4.webp";
import personF2 from "../assets/img/person/person-m-2.webp";

export default function Landing() {
  // Helper function to render stars
  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(count)) {
        stars.push(<i key={i} className="bi bi-star-fill"></i>);
      } else if (i === Math.ceil(count) && count % 1 !== 0) {
        stars.push(<i key={i} className="bi bi-star-half"></i>);
      } else {
        stars.push(<i key={i} className="bi bi-star"></i>);
      }
    }
    return stars;
  };

  // Data
  const programsData = [
    {
      icon: "bi bi-code-slash",
      title: "Skill-Based Courses",
      description: "Industry-focused courses in programming, web & mobile development, AI/ML, cybersecurity, UI/UX, and digital marketing.",
    },
    {
      icon: "bi bi-laptop",
      title: "Online & Offline Internships",
      description: "4-week real-time internships with live projects, mentor guidance, and verified certificates.",
    },
    {
      icon: "bi bi-briefcase",
      title: "Live Projects",
      description: "Work on real client and student-led projects to build strong portfolios and practical experience.",
    },
    {
      icon: "bi bi-calendar-event",
      title: "Bootcamps & Workshops",
      description: "Short-term bootcamps, webinars, and workshops on trending technologies.",
    },
    {
      icon: "bi bi-book",
      title: "Learning Management System",
      description: "Self-paced learning with recorded courses, progress tracking, dashboards, and digital certificates.",
    },
    {
      icon: "bi bi-person-check",
      title: "Career & Placement Support",
      description: "Resume building, mock interviews, soft skills training, and placement assistance.",
    },
  ];

  const statsData = [
    { number: "20+", label: "Technology Domains" },
    { number: "100+", label: "Live Projects" },
    { number: "95%", label: "Learner Satisfaction" },
    { number: "2025", label: "Established" },
  ];

  const whyUsStatsData = [
    { value: "100", suffix: "+", label: "Live Projects Completed", delay: 300 },
    { value: "95", suffix: "%", label: "Learner Satisfaction", delay: 350 },
    { value: "20", suffix: "+", label: "Technology Domains", delay: 400 },
  ];

  const featuresData = [
    {
      title: "Real-Time Project Learning",
      description: "We emphasize hands-on, real-world projects instead of theory-only learning, helping students gain practical industry experience.",
      icon: "bi bi-code-slash",
      highlight: true,
      delay: 250,
    },
    {
      title: "Industry-Experienced Mentors",
      description: "Learn directly from professionals with real IT industry exposure, tools, workflows, and best practices.",
      icon: "bi bi-person-workspace",
      delay: 300,
    },
    {
      title: "Career-Focused Training",
      description: "Our programs are designed to make learners job-ready through internships, live projects, and placement guidance.",
      icon: "bi bi-briefcase-fill",
      delay: 350,
    },
  ];

  const capabilitiesData = [
    {
      title: "Skill-Based Education",
      description: "Structured learning paths focused on in-demand skills across software development, data, AI, cybersecurity, and design.",
      icon: "bi bi-mortarboard-fill",
    },
    {
      title: "Live Internships & Projects",
      description: "Students work on real-time internships and client-style projects under mentor supervision to build strong portfolios.",
      icon: "bi bi-laptop-fill",
    },
    {
      title: "Career & Placement Support",
      description: "Resume building, mock interviews, soft skills training, and placement assistance to help learners enter the IT industry.",
      icon: "bi bi-person-check-fill",
    },
  ];

  const testimonialsData = [
    {
      text: "Techackode Edutech gave me real-time project experience during my internship. I worked on live applications, which helped me gain confidence and build a strong portfolio.",
      authorName: "Arjun Kumar",
      authorRole: "Final Year CSE Student",
      img: personM5,
    },
    {
      text: "The mentors at Techackode Edutech explain concepts practically with real-world examples. The hands-on learning approach made complex topics easy to understand.",
      authorName: "Sneha R",
      authorRole: "Python & Data Analytics Learner",
      img: personF7,
    },
    {
      text: "Unlike other platforms, Techackode focuses on skills and projects, not just certificates. The live internship helped me clear technical interviews confidently.",
      authorName: "Rahul Sharma",
      authorRole: "Junior Software Developer",
      img: personM9,
    },
    {
      text: "I joined Techackode Edutech as a career switcher. The structured learning, mentor support, and placement guidance helped me move into the IT industry.",
      authorName: "Divya K",
      authorRole: "Career Switcher",
      img: personF4,
    },
    {
      text: "The LMS platform is easy to use and well-structured. Recorded sessions, assignments, and projects helped me learn at my own pace without missing quality.",
      authorName: "Mohammed Irfan",
      authorRole: "Full Stack Learner",
      img: personF2,
    },
  ];

  return (
    <div className="landing">
      {/* HERO SECTION */}
      <section id="courses-hero" className="courses-hero section light-background">
        <div className="hero-content">
          <div className="container">
            <div className="row align-items-center">
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
                      <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="40" data-purecounter-duration="2"></span>
                      <span className="label">Learners Trained</span>
                    </div>
                    <div className="stat-item">
                      <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="35" data-purecounter-duration="2"></span>
                      <span className="label">Technology Domains</span>
                    </div>
                    <div className="stat-item">
                      <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="90" data-purecounter-duration="2"></span>
                      <span className="label">Project Completion %</span>
                    </div>
                  </div>

                  <div className="hero-buttons">
                    <a href="#courses" className="btn btn-primary">Explore Courses</a>
                    <a href="#internships" className="btn btn-outline">Apply for Internship</a>
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

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="hero-image">
                  <div className="main-image">
                    <img src={heroImg} alt="Techackode Edutech Learning" className="img-fluid" loading="lazy" />
                  </div>

                  <div className="floating-cards">
                    <div className="course-card" data-aos="fade-up" data-aos-delay="300">
                      <div className="card-icon"><i className="bi bi-code-slash"></i></div>
                      <div className="card-content">
                        <h6>Full Stack Development</h6>
                        <span>Live Projects</span>
                      </div>
                    </div>
                    <div className="course-card" data-aos="fade-up" data-aos-delay="400">
                      <div className="card-icon"><i className="bi bi-shield-lock"></i></div>
                      <div className="card-content">
                        <h6>Cybersecurity</h6>
                        <span>Hands-on Labs</span>
                      </div>
                    </div>
                    <div className="course-card" data-aos="fade-up" data-aos-delay="500">
                      <div className="card-icon"><i className="bi bi-cpu"></i></div>
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

        <div className="hero-background">
          <div className="bg-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section id="featured-courses" className="featured-courses section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Featured Courses</h2>
          <p>Learn practical skills and gain real-world experience with our top programs.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {/* Course 1 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="course-card">
                <div className="course-image">
                  <img src={students9} alt="LevelUP 360" className="img-fluid" />
                </div>
                <div className="course-content">
                  <div className="course-meta">
                    <span className="level">Advanced</span>
                    <span className="duration">12 Weeks</span>
                  </div>
                  <h3><Link to="#">LevelUP 360</Link></h3>
                  <p>A comprehensive program covering full-stack development, live projects, and real-world career readiness.</p>
                  <div className="course-stats">
                    <div className="rating">
                      {renderStars(4.8)}
                      <span>(4.8)</span>
                    </div>
                    <div className="students">
                      <i className="bi bi-people-fill"></i>
                      <span>420 students</span>
                    </div>
                  </div>
                  <Link to="/enroll" className="btn-course mt-3">Enroll Now</Link>
                </div>
              </div>
            </div>

            {/* Course 2 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="course-card">
                <div className="course-image">
                  <img src={campus4} alt="Digital Marketing" className="img-fluid" />
                </div>
                <div className="course-content">
                  <div className="course-meta">
                    <span className="level">Beginner</span>
                    <span className="duration">8 Weeks</span>
                  </div>
                  <h3><Link to="#">Digital Marketing</Link></h3>
                  <p>Learn SEO, social media marketing, and analytics to launch your career in digital marketing.</p>
                  <div className="course-stats">
                    <div className="rating">
                      {renderStars(4.7)}
                      <span>(4.7)</span>
                    </div>
                    <div className="students">
                      <i className="bi bi-people-fill"></i>
                      <span>350 students</span>
                    </div>
                  </div>
                  <Link to="/enroll" className="btn-course mt-3">Enroll Now</Link>
                </div>
              </div>
            </div>

            {/* Course 3 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="course-card">
                <div className="course-image">
                  <img src={students7} alt="React Native" className="img-fluid" />
                </div>
                <div className="course-content">
                  <div className="course-meta">
                    <span className="level">Intermediate</span>
                    <span className="duration">10 Weeks</span>
                  </div>
                  <h3><Link to="#">React Native (App Development)</Link></h3>
                  <p>Build cross-platform mobile apps using React Native and gain hands-on experience with live projects.</p>
                  <div className="course-stats">
                    <div className="rating">
                      {renderStars(4.9)}
                      <span>(4.9)</span>
                    </div>
                    <div className="students">
                      <i className="bi bi-people-fill"></i>
                      <span>280 students</span>
                    </div>
                  </div>
                  <Link to="/enroll" className="btn-course mt-3">Enroll Now</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="more-courses text-center" data-aos="fade-up" data-aos-delay="500">
            <Link to="/courses" className="btn-more">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="services section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Our Programs</h2>
          <p>Practical, affordable, and career-focused learning designed for real industry success.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4">
            {programsData.map((program, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <div className="service-card">
                  <div className="icon-wrapper">
                    <i className={program.icon}></i>
                  </div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="stats-row mt-5">
            <div className="row g-4 justify-content-center">
              {statsData.map((stat, idx) => (
                <div key={idx} className="col-6 col-md-3">
                  <div className="stat-item">
                    <span className="stat-number">{stat.number}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="why-us" className="why-us section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Why Techackode Edutech</h2>
          <p>Practical learning, real projects, and career-focused education designed for real-world IT success.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-5" data-aos="fade-right" data-aos-delay="200">
              <div className="sidebar-content">
                <div className="badge-wrapper">
                  <span className="section-badge">
                    <i className="bi bi-stars"></i> Our Difference
                  </span>
                </div>

                <h2>Learn Practically. Build Confidently. Grow Professionally.</h2>

                <p className="description">
                  Techackode Edutech bridges the gap between academic learning and
                  real-world IT requirements through hands-on training, real-time
                  projects, and mentor-led education for students and working
                  professionals across India.
                </p>

                {/* STATS */}
                <div className="stat-cards">
                  {whyUsStatsData.map((stat, idx) => (
                    <div key={idx} className="stat-card" data-aos="zoom-in" data-aos-delay={stat.delay}>
                      <div className="stat-value">{stat.value}{stat.suffix}</div>
                      <div className="stat-text">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* CTA BUTTONS */}
                <div className="action-buttons">
                  <a href="#contact" className="btn-main">Start Learning Today</a>
                  <a href="#programs" className="btn-outline">Explore Programs</a>
                </div>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
              {/* FEATURES */}
              <div className="features-grid">
                {featuresData.map((feature, idx) => (
                  <div key={idx} className={`feature-box ${feature.highlight ? "highlight" : ""}`} data-aos="fade-up" data-aos-delay={feature.delay}>
                    {feature.highlight && <div className="feature-ribbon">Top Rated</div>}
                    <div className="feature-icon">
                      <i className={feature.icon}></i>
                    </div>
                    <div className="feature-content">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* LEARNING PROCESS */}
              <div className="process-timeline" data-aos="fade-up" data-aos-delay="400">
                <h5 className="timeline-title">
                  <i className="bi bi-diagram-3-fill"></i> Our Learning Process
                </h5>

                <div className="timeline-steps">
                  <div className="timeline-step">
                    <div className="step-marker">1</div>
                    <div className="step-info">
                      <strong>Learn</strong>
                      <span>Concepts with practical demos</span>
                    </div>
                  </div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-step">
                    <div className="step-marker">2</div>
                    <div className="step-info">
                      <strong>Practice</strong>
                      <span>Hands-on assignments & tasks</span>
                    </div>
                  </div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-step">
                    <div className="step-marker">3</div>
                    <div className="step-info">
                      <strong>Build</strong>
                      <span>Live projects & internships</span>
                    </div>
                  </div>
                  <div className="timeline-connector"></div>
                  <div className="timeline-step">
                    <div className="step-marker">4</div>
                    <div className="step-info">
                      <strong>Launch</strong>
                      <span>Career & placement support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CAPABILITIES */}
              <div className="capabilities-section" data-aos="fade-up" data-aos-delay="450">
                <h5 className="capabilities-heading">What We Bring to the Table</h5>
                <div className="capabilities-grid">
                  {capabilitiesData.map((cap, idx) => (
                    <div key={idx} className="capability-card">
                      <div className="capability-icon">
                        <i className={cap.icon}></i>
                      </div>
                      <h6>{cap.title}</h6>
                      <p>{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="testimonials section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>What Our Learners Say</h2>
          <p>Real stories from students and professionals who transformed their careers with Techackode Edutech.</p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            {/* LEFT SIDEBAR */}
            <div className="col-lg-4" data-aos="fade-right" data-aos-delay="150">
              <div className="testimonials-sidebar">
                {/* AVATAR STACK */}
                <div className="avatar-stack">
                  <img src={personM3} alt="Learner" className="avatar" />
                  <img src={personF9} alt="Learner" className="avatar" />
                  <img src={personM9} alt="Learner" className="avatar" />
                  <img src={personM11} alt="Learner" className="avatar" />
                  <span className="avatar-count">+1K</span>
                </div>

                {/* SIDEBAR CONTENT */}
                <div className="sidebar-content">
                  <span className="satisfied-badge">
                    <i className="bi bi-heart-fill"></i> Trusted by Learners
                  </span>
                  <h3>Success Stories That Inspire Confidence</h3>
                  <p>
                    Our learners come from diverse backgrounds including students,
                    fresh graduates, working professionals, and career switchers.
                    What connects them is real learning and real outcomes.
                  </p>
                  <a href="#contact" className="btn-view-all">
                    Join Our Learners <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT SLIDER */}
            <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
              <Swiper
                loop={true}
                speed={700}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={24}
                pagination={{ clickable: true }}
                breakpoints={{ 768: { slidesPerView: 2 } }}
                className="testimonials-carousel"
              >
                {testimonialsData.map((t, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="testimonial-card">
                      <div className="card-top">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="bi bi-star-fill"></i>
                          ))}
                        </div>
                        <span className="quote-mark">
                          <i className="bi bi-quote"></i>
                        </span>
                      </div>
                      <p className="testimonial-text">{t.text}</p>
                      <div className="author-info">
                        <div className="author-icon">
                          <i className="bi bi-person-circle" style={{ fontSize: "2.5rem", color: "#6c757d", marginRight: "15px" }}></i>
                        </div>
                        <div className="author-details">
                          <h5 style={{ marginBottom: "0" }}>{t.authorName}</h5>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <div className="cta-section" data-aos="zoom-in" data-aos-delay="300">
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
    </div>
  )
}
