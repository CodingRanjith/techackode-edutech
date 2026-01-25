import React, { useState, useEffect } from 'react';
import './Internship.css';

export default function Internship() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: '',
    phone: '',
    message: ''
  });

  const domains = [
    'Full Stack Development',
    'React.js Specialization',
    'Python for AI/ML',
    'Data Science & Analytics',
    'UI/UX Design',
    'Cybersecurity Essentials',
    'Mobile App Development (Flutter)',
    'Digital Marketing Mastery'
  ];

  const benefits = [
    {
      title: "Real Project Experience",
      desc: "Work on live client projects and tackle real-world challenges.",
      icon: "bi bi-rocket-takeoff"
    },
    {
      title: "Expert Mentorship",
      desc: "Get 1-on-1 guidance from industry leaders and senior developers.",
      icon: "bi bi-person-workspace"
    },
    {
      title: "Recognized Certificate",
      desc: "Receive a professional certificate to boost your resume credibility.",
      icon: "bi bi-patch-check"
    },
    {
      title: "Portfolio Building",
      desc: "Develop high-quality projects to showcase on your GitHub profile.",
      icon: "bi bi-folder2-open"
    }
  ];

  const timelineSteps = [
    {
      phase: "Week 1-2",
      title: "Foundation & Setup",
      desc: "Introduction to project architecture, tech stack deep dive, and initial environment setup."
    },
    {
      phase: "Week 3",
      title: "Core Development",
      desc: "Intensive coding phase with daily standups and weekly progress reviews with mentors."
    },
    {
      phase: "Week 4",
      title: "Finalization & Review",
      desc: "Bug fixing, testing, deployment, and final project evaluation with feedback."
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Application received! We'll contact you soon.");
  };

  return (
    <div className="internship-page">
      {/* 3D Animated Banner */}
      <section className="internship-banner">
        <div className="container">
          <div className="banner-content" data-aos="zoom-out">
            <h1>Ignite Your Career with <span>Techackode</span></h1>
            <p>Join our 4-week elite internship program and transform from a learner to a professional.</p>
            <div className="price-tag-3d">
              ₹1,000 <small style={{ fontSize: '1rem', opacity: 0.7 }}>/ domain</small>
            </div>
          </div>
        </div>
        <div className="visual-bg-elements">
          <div className="v-shape v-shape-1"></div>
          <div className="v-shape v-shape-2"></div>
        </div>
      </section>

      <div className="internship-main-content">
        <div className="container">

          {/* 3D Benefits Showcase */}
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card-3d" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="benefit-icon-wrapper">
                  <i className={benefit.icon}></i>
                </div>
                <h4>{benefit.title}</h4>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="premium-layout-grid">
            {/* Left Column: Timeline */}
            <div className="timeline-column" data-aos="fade-right">
              <div className="timeline-3d">
                <h3>Program <span>Roadmap</span></h3>
                <div className="timeline-track">
                  {timelineSteps.map((step, index) => (
                    <div key={index} className="t-item">
                      <div className="t-dot"></div>
                      <div className="t-box">
                        <h5>{step.phase}</h5>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="tech-stack-row mt-5">
                  <p className="text-muted mb-3">Technologies you'll work with:</p>
                  <div className="d-flex gap-3 flex-wrap" style={{ fontSize: '1.5rem', color: '#94a3b8' }}>
                    <i className="bi bi-filetype-html"></i>
                    <i className="bi bi-filetype-css"></i>
                    <i className="bi bi-filetype-js"></i>
                    <i className="bi bi-filetype-py"></i>
                    <i className="bi bi-github"></i>
                    <i className="bi bi-database"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Application Form */}
            <div className="form-column" data-aos="fade-left">
              <div className="apply-card-3d">
                <h3>Secure Your <span>Spot</span></h3>
                <form onSubmit={handleSubmit}>
                  <div className="premium-input-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="premium-input-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="premium-input-group">
                    <select
                      required
                      value={formData.domain}
                      onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                    >
                      <option value="">Select Domain</option>
                      {domains.map((domain, idx) => (
                        <option key={idx} value={domain}>{domain}</option>
                      ))}
                    </select>
                  </div>
                  <div className="premium-input-group">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="premium-input-group">
                    <textarea
                      placeholder="Tell us about your goals..."
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-enroll-3d">
                    Apply Now & Pay ₹1,000
                  </button>
                  <p className="text-center mt-3 text-muted small">
                    <i className="bi bi-shield-check me-1"></i> Secure Payment via Razorpay
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
