import React, { useEffect } from 'react';
import './LMS.css';

export default function LMS() {
  const features = [
    { icon: 'bi bi-play-btn', title: 'Seamless Streaming', desc: 'Experience buffer-free HD streaming on any device.' },
    { icon: 'bi bi-graph-up-arrow', title: 'Advanced Analytics', desc: 'Track your learning journey with precision metrics.' },
    { icon: 'bi bi-award', title: 'Smart Certifications', desc: 'Blockchain-verified certificates upon course completion.' },
    { icon: 'bi bi-people', title: 'Social Learning', desc: 'Engage in peer-to-peer discussions and networking.' },
    { icon: 'bi bi-chat-left-dots', title: 'Expert Q&A', desc: 'Get direct answers from instructors and mentors.' },
    { icon: 'bi bi-cloud-download', title: 'Offline Access', desc: 'Download lessons and learn without internet connectivity.' },
  ];

  return (
    <div className="lms-page">
      {/* Premium Hero Banner */}
      <section className="lms-banner">
        <div className="container">
          <div className="banner-text-content" data-aos="fade-right">
            <span className="lms-tag">All-in-One Learning System</span>
            <h1>The Future of <span>Online Education</span></h1>
            <p>Empower your growth with Techackode's intelligent learning portal. Structured paths, recorded sessions, and industry-standard certifications.</p>
            <div className="banner-btns">
              <a href="#portal" className="btn-portal">Enter Portal</a>
              <a href="#demo" className="btn-demo">View Demo</a>
            </div>
          </div>

          <div className="banner-mockup" data-aos="fade-left">
            <div className="mockup-container">
              <div className="mockup-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="mockup-body">
                <div className="mock-row" style={{ width: '60%' }}></div>
                <div className="mock-row" style={{ width: '40%', marginBottom: '30px' }}></div>
                <div className="mock-chart">
                  <div className="chart-bar" style={{ height: '60%' }}></div>
                  <div className="chart-bar" style={{ height: '90%' }}></div>
                  <div className="chart-bar" style={{ height: '40%' }}></div>
                  <div className="chart-bar" style={{ height: '100%' }}></div>
                  <div className="chart-bar" style={{ height: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <div className="container lms-stats">
        <div className="stats-glass-card" data-aos="fade-up">
          <div className="stat-item">
            <h3>50K+</h3>
            <p>Active Learners</p>
          </div>
          <div className="stat-item">
            <h3>1.2K+</h3>
            <p>Premium Courses</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>Satisfaction Rate</p>
          </div>
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Mentor Support</p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="lms-features-section container">
        <h2 data-aos="fade-up">Integrated <span>Power-Features</span></h2>
        <div className="lms-features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="lms-feature-card" data-aos="fade-up" data-aos-delay={idx * 50}>
              <div className="f-icon">
                <i className={feature.icon}></i>
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="lms-pricing-section">
        <div className="container">
          <h2 data-aos="fade-up">Flexible <span>Learning Plans</span></h2>
          <p className="p-subtitle" data-aos="fade-up">Choose the path that fits your professional goals</p>

          <div className="p-grid">
            {/* Starter */}
            <div className="p-card" data-aos="fade-up">
              <h3>Basic Access</h3>
              <div className="p-amount">₹499</div>
              <p className="p-desc">Per single course</p>
              <ul className="p-features">
                <li><i className="bi bi-check-circle-fill"></i> Lifetime course access</li>
                <li><i className="bi bi-check-circle-fill"></i> HD Video streaming</li>
                <li><i className="bi bi-check-circle-fill"></i> Community forums</li>
                <li><i className="bi bi-check-circle-fill"></i> Mobile compatibility</li>
              </ul>
              <button className="btn-choose">Start Learning</button>
            </div>

            {/* Pro */}
            <div className="p-card featured" data-aos="fade-up" data-aos-delay="100">
              <span className="popular-badge">Most Popular</span>
              <h3>Premium Pro</h3>
              <div className="p-amount">₹2,499</div>
              <p className="p-desc">Per bundle/specialization</p>
              <ul className="p-features">
                <li><i className="bi bi-check-circle-fill"></i> All Basic features</li>
                <li><i className="bi bi-check-circle-fill"></i> Blockchain Certificates</li>
                <li><i className="bi bi-check-circle-fill"></i> Mentor support (1 mo)</li>
                <li><i className="bi bi-check-circle-fill"></i> Project evaluations</li>
              </ul>
              <button className="btn-choose">Unlock Premium</button>
            </div>

            {/* Professional */}
            <div className="p-card" data-aos="fade-up" data-aos-delay="200">
              <h3>Professional</h3>
              <div className="p-amount">₹4,999</div>
              <p className="p-desc">Full career roadmap</p>
              <ul className="p-features">
                <li><i className="bi bi-check-circle-fill"></i> All Premium features</li>
                <li><i className="bi bi-check-circle-fill"></i> Placement assistance</li>
                <li><i className="bi bi-check-circle-fill"></i> Interview preparation</li>
                <li><i className="bi bi-check-circle-fill"></i> Exclusive workshops</li>
              </ul>
              <button className="btn-choose">Go Professional</button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="container py-5 text-center" data-aos="zoom-in">
        <div className="cta-box glass p-5 rounded-5 mt-5" style={{ background: 'linear-gradient(135deg, #135FA2 0%, #0d4a7d 100%)', color: 'white' }}>
          <h2>Ready to transform your skills?</h2>
          <p className="opacity-75 mb-4">Join 50,000+ students already learning on Techackode.</p>
          <button className="btn btn-light btn-lg rounded-pill px-5 fw-bold">Create Free Account</button>
        </div>
      </section>
    </div>
  );
}
