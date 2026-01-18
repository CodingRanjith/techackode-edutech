import React from 'react'
import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>About Techackode Edutech</h1>
          <p>Empowering the next generation of tech professionals</p>
        </div>
      </section>

      <section className="about-section container">
        <div className="mission-vision">
          <div className="mv-card">
            <h3>🎯 Our Mission</h3>
            <p>To make high-quality tech education affordable, practical, and accessible to everyone across India.</p>
          </div>
          <div className="mv-card">
            <h3>👁️ Our Vision</h3>
            <p>To empower students and professionals with hands-on learning and industry-ready skills through innovative online and offline programs.</p>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-card">
            <h4>25M+</h4>
            <p>Learners</p>
          </div>
          <div className="stat-card">
            <h4>500+</h4>
            <p>Courses</p>
          </div>
          <div className="stat-card">
            <h4>15+</h4>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h4>150+</h4>
            <p>Expert Trainers</p>
          </div>
        </div>

        <div className="why-section">
          <h2>Why Choose Techackode?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">💼</div>
              <h4>Industry-Ready Skills</h4>
              <p>Learn technologies used by top companies in real-world projects.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">👨‍🏫</div>
              <h4>Expert Mentors</h4>
              <p>Get guidance from professionals with years of industry experience.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h4>Affordable Pricing</h4>
              <p>Quality education without breaking the bank. Internships start at ₹1,000.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎓</div>
              <h4>Certifications</h4>
              <p>Earn recognized certifications that boost your resume.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h4>Job Placement</h4>
              <p>Get placed with our network of partner companies.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🌐</div>
              <h4>Online & Offline</h4>
              <p>Flexible learning modes to suit your schedule.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
