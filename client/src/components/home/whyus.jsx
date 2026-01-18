import React from "react";

/* =========================
   STATS DATA
========================= */
const statsData = [
  { value: "100", suffix: "+", label: "Live Projects Completed", delay: 300 },
  { value: "95", suffix: "%", label: "Learner Satisfaction", delay: 350 },
  { value: "20", suffix: "+", label: "Technology Domains", delay: 400 },
];

/* =========================
   FEATURES DATA
========================= */
const featuresData = [
  {
    title: "Real-Time Project Learning",
    description:
      "We emphasize hands-on, real-world projects instead of theory-only learning, helping students gain practical industry experience.",
    icon: "bi bi-code-slash",
    highlight: true,
    delay: 250,
  },
  {
    title: "Industry-Experienced Mentors",
    description:
      "Learn directly from professionals with real IT industry exposure, tools, workflows, and best practices.",
    icon: "bi bi-person-workspace",
    delay: 300,
  },
  {
    title: "Career-Focused Training",
    description:
      "Our programs are designed to make learners job-ready through internships, live projects, and placement guidance.",
    icon: "bi bi-briefcase-fill",
    delay: 350,
  },
];

/* =========================
   CAPABILITIES DATA
========================= */
const capabilitiesData = [
  {
    title: "Skill-Based Education",
    description:
      "Structured learning paths focused on in-demand skills across software development, data, AI, cybersecurity, and design.",
    icon: "bi bi-mortarboard-fill",
  },
  {
    title: "Live Internships & Projects",
    description:
      "Students work on real-time internships and client-style projects under mentor supervision to build strong portfolios.",
    icon: "bi bi-laptop-fill",
  },
  {
    title: "Career & Placement Support",
    description:
      "Resume building, mock interviews, soft skills training, and placement assistance to help learners enter the IT industry.",
    icon: "bi bi-person-check-fill",
  },
];

/* =========================
   WHY US COMPONENT
========================= */
const WhyUs = () => {
  return (
    <section id="why-us" className="why-us section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Why Techackode Edutech</h2>
        <p>
          Practical learning, real projects, and career-focused education
          designed for real-world IT success.
        </p>
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
                {statsData.map((stat, idx) => (
                  <div
                    key={idx}
                    className="stat-card"
                    data-aos="zoom-in"
                    data-aos-delay={stat.delay}
                  >
                    <div className="stat-value">
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <div className="stat-text">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA BUTTONS */}
              <div className="action-buttons">
                <a href="#contact" className="btn-main">
                  Start Learning Today
                </a>
                <a href="#programs" className="btn-outline">
                  Explore Programs
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-7" data-aos="fade-left" data-aos-delay="200">
            {/* FEATURES */}
            <div className="features-grid">
              {featuresData.map((feature, idx) => (
                <div
                  key={idx}
                  className={`feature-box ${
                    feature.highlight ? "highlight" : ""
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={feature.delay}
                >
                  {feature.highlight && (
                    <div className="feature-ribbon">Top Rated</div>
                  )}
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
            <div
              className="process-timeline"
              data-aos="fade-up"
              data-aos-delay="400"
            >
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
            <div
              className="capabilities-section"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <h5 className="capabilities-heading">
                What We Bring to the Table
              </h5>

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
  );
};

export default WhyUs;
