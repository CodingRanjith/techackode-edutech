import React from "react";

const programsData = [
  {
    icon: "bi bi-code-slash",
    title: "Skill-Based Courses",
    description:
      "Industry-focused courses in programming, web & mobile development, AI/ML, cybersecurity, UI/UX, and digital marketing.",
  },
  {
    icon: "bi bi-laptop",
    title: "Online & Offline Internships",
    description:
      "4-week real-time internships with live projects, mentor guidance, and verified certificates.",
  },
  {
    icon: "bi bi-briefcase",
    title: "Live Projects",
    description:
      "Work on real client and student-led projects to build strong portfolios and practical experience.",
  },
  {
    icon: "bi bi-calendar-event",
    title: "Bootcamps & Workshops",
    description:
      "Short-term bootcamps, webinars, and workshops on trending technologies.",
  },
  {
    icon: "bi bi-book",
    title: "Learning Management System",
    description:
      "Self-paced learning with recorded courses, progress tracking, dashboards, and digital certificates.",
  },
  {
    icon: "bi bi-person-check",
    title: "Career & Placement Support",
    description:
      "Resume building, mock interviews, soft skills training, and placement assistance.",
  },
];

const statsData = [
  { number: "20+", label: "Technology Domains" },
  { number: "100+", label: "Live Projects" },
  { number: "95%", label: "Learner Satisfaction" },
  { number: "2025", label: "Established" },
];

const Programs = () => {
  return (
    <section id="programs" className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Programs</h2>
        <p>
          Practical, affordable, and career-focused learning designed for real
          industry success.
        </p>
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
  );
};

export default Programs;
