import React from 'react'
import './LMS.css'

export default function LMS() {
  const features = [
    { icon: '📹', title: 'Video Streaming', desc: 'HD quality video content available 24/7' },
    { icon: '📊', title: 'Student Dashboard', desc: 'Track progress with detailed analytics' },
    { icon: '🎓', title: 'Certifications', desc: 'Earn recognized certificates on completion' },
    { icon: '👥', title: 'Community', desc: 'Connect with thousands of learners' },
    { icon: '💬', title: 'Q&A Forum', desc: 'Get doubts cleared by mentors' },
    { icon: '📱', title: 'Mobile App', desc: 'Learn on the go, offline downloads available' },
  ]

  return (
    <div className="lms-page">
      <section className="page-header">
        <div className="container">
          <h1>Techackode Learning Portal</h1>
          <p>Recorded courses, certifications & lifetime access</p>
        </div>
      </section>

      <section className="lms-intro container">
        <div className="intro-grid">
          <div className="intro-content">
            <h2>Learn at Your Own Pace</h2>
            <p>Our LMS platform brings together the best of online learning with recorded courses from industry experts.</p>
            <ul className="intro-list">
              <li>500+ recorded courses</li>
              <li>Lifetime access to purchased courses</li>
              <li>Structured learning paths</li>
              <li>Interactive quizzes & assignments</li>
              <li>Career-focused content</li>
            </ul>
            <a href="#" className="btn-primary">Explore Courses</a>
          </div>
          <div className="intro-image">
            <div className="lms-placeholder">🎓</div>
          </div>
        </div>
      </section>

      <section className="lms-features container">
        <h2>Platform Features</h2>
        <div className="features-grid">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="lms-pricing">
        <div className="container">
          <h2>Course Pricing</h2>
          <p className="pricing-subtitle">Affordable learning for everyone</p>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Basic</h3>
              <div className="price">₹499</div>
              <p className="price-desc">per course</p>
              <ul className="features-list">
                <li>✓ Lifetime access</li>
                <li>✓ HD videos</li>
                <li>✓ Assignments</li>
              </ul>
              <button className="btn-primary">Enroll</button>
            </div>
            <div className="pricing-card featured">
              <h3>Premium</h3>
              <div className="price">₹2,499</div>
              <p className="price-desc">per course</p>
              <ul className="features-list">
                <li>✓ Everything in Basic</li>
                <li>✓ Mentor support</li>
                <li>✓ Certificate</li>
                <li>✓ Live sessions</li>
              </ul>
              <button className="btn-primary">Enroll</button>
            </div>
            <div className="pricing-card">
              <h3>Professional</h3>
              <div className="price">₹4,999</div>
              <p className="price-desc">per course</p>
              <ul className="features-list">
                <li>✓ Everything in Premium</li>
                <li>✓ Career guidance</li>
                <li>✓ Interview prep</li>
              </ul>
              <button className="btn-primary">Enroll</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
