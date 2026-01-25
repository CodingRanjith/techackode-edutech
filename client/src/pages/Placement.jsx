import React from 'react';
import './Placement.css';

export default function Placement() {
  const features = [
    { icon: 'bi bi-file-earmark-person', title: 'Resume Building', desc: 'Expert-led workshops on crafting high-impact portfolios and tech-ready resumes.' },
    { icon: 'bi bi-mic', title: 'Interview Preparation', desc: 'Mock interviews with industry specialists and technical deep-dives for top roles.' },
    { icon: 'bi bi-building-check', title: 'Corporate Network', desc: 'Access to 500+ hiring partners and exclusive recruitment drives.' },
    { icon: 'bi bi-briefcase', title: 'Curated Job Board', desc: 'Real-time job listings from partner startups and tier-1 tech companies.' },
  ];

  const impactStats = [
    { count: '85%', label: 'Placement Rate' },
    { count: '6.5', label: 'Avg LPA Package' },
    { count: '500+', label: 'Hiring Partners' },
    { count: '1200+', label: 'Lives Transformed' },
  ];

  return (
    <div className="placement-page">
      {/* Premium Banner */}
      <section className="placement-banner">
        <div className="container">
          <div className="banner-content" data-aos="zoom-in">
            <span className="placement-tag">Career Acceleration Program</span>
            <h1>Bridge the Gap to your <span>Dream Career</span></h1>
            <p>We don't just teach you; we get you placed. Join the elite league of Techackode alumni working at top global firms.</p>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="container placement-features">
        <div className="features-grid">
          {features.map((f, idx) => (
            <div key={idx} className="feature-card-3d" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="icon-box">
                <i className={f.icon}></i>
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program Matrix */}
      <section className="container placement-comparison">
        <h2 data-aos="fade-up">Compare Our <span>Support Plans</span></h2>
        <div className="program-grid">

          {/* Free Plan */}
          <div className="program-card-premium" data-aos="fade-right">
            <h3>Standard Support</h3>
            <p className="price-condition">Complimentary with all courses</p>
            <ul className="benefit-list">
              <li><i className="bi bi-check-circle-fill"></i> Automated Resume Builder</li>
              <li><i className="bi bi-check-circle-fill"></i> Group Career Workshops</li>
              <li><i className="bi bi-check-circle-fill"></i> Access to Public Job Postings</li>
              <li><i className="bi bi-check-circle-fill"></i> Digital Portfolio Templates</li>
            </ul>
            <button className="btn-program light">Included in Course</button>
          </div>

          {/* Premium Plan */}
          <div className="program-card-premium featured" data-aos="fade-left">
            <span className="popular-ribbon">Most Preferred</span>
            <h3>Elite Placement</h3>
            <p className="price-condition">Zero Cost Upfront (ISA Model)</p>
            <ul className="benefit-list">
              <li><i className="bi bi-check-circle-fill"></i> 1-on-1 Senior Industry Mentors</li>
              <li><i className="bi bi-check-circle-fill"></i> Guaranteed Interview Calls</li>
              <li><i className="bi bi-check-circle-fill"></i> Salary Negotiation Assistance</li>
              <li><i className="bi bi-check-circle-fill"></i> Advanced Mock Interview Series</li>
            </ul>
            <button className="btn-program accent">Join Elite Track</button>
          </div>

        </div>
      </section>

      {/* Impact Section */}
      <section className="placement-impact">
        <div className="container">
          <div className="impact-header" data-aos="fade-up">
            <h2>Our Track <span>Record</span></h2>
            <p>Measurable impact that speaks for itself.</p>
          </div>
          <div className="impact-grid">
            {impactStats.map((s, idx) => (
              <div key={idx} className="impact-item" data-aos="fade-up" data-aos-delay={idx * 100}>
                <span className="count">{s.count}</span>
                <span className="label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Hiring Banner */}
      <section className="container py-5 mb-5">
        <div className="hiring-banner glass p-5 rounded-5 text-center" style={{ background: 'linear-gradient(45deg, #135FA2, #12283d)', color: 'white' }} data-aos="zoom-in">
          <h2 className="fw-bold mb-3">Are you a recruiter?</h2>
          <p className="mb-4 opacity-75">Hire the top 1% tech talent trained by Techackode. Zero recruitment fees.</p>
          <button className="btn btn-light btn-lg px-5 rounded-pill fw-bold">Post a Requirement</button>
        </div>
      </section>
    </div>
  );
}
