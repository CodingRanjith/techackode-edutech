import React from 'react'
import './Placement.css'

export default function Placement() {
  return (
    <div className="placement-page">
      <section className="page-header">
        <div className="container">
          <h1>Career & Placement</h1>
          <p>Get placed with companies hiring our learners</p>
        </div>
      </section>

      <section className="placement-section container">
        <div className="placement-grid">
          <div className="placement-card">
            <div className="card-icon">📋</div>
            <h3>Resume Building</h3>
            <p>Professional resume writing and optimization for tech roles</p>
          </div>
          <div className="placement-card">
            <div className="card-icon">🎤</div>
            <h3>Interview Prep</h3>
            <p>Mock interviews and technical interview preparation</p>
          </div>
          <div className="placement-card">
            <div className="card-icon">🤝</div>
            <h3>Company Tie-ups</h3>
            <p>Direct placement assistance from our partner companies</p>
          </div>
          <div className="placement-card">
            <div className="card-icon">💼</div>
            <h3>Job Board</h3>
            <p>Exclusive job listings for our learners and alumni</p>
          </div>
        </div>

        <div className="placement-programs">
          <h2>Our Programs</h2>
          <div className="programs-grid">
            <div className="program">
              <h3>Free Placement Support</h3>
              <p className="free-label">Available to all learners</p>
              <ul>
                <li>✓ Resume review</li>
                <li>✓ Interview coaching</li>
                <li>✓ LinkedIn optimization</li>
                <li>✓ Job board access</li>
              </ul>
            </div>

            <div className="program featured">
              <span className="badge">Popular</span>
              <h3>Premium Placement</h3>
              <p className="premium-label">₹0 - Pay only after placement</p>
              <ul>
                <li>✓ Everything in Free</li>
                <li>✓ 1-on-1 career coaching</li>
                <li>✓ Guaranteed interview calls</li>
                <li>✓ 2-month salary commission on success</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="placement-stats">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h4>85%</h4>
              <p>Placement rate</p>
            </div>
            <div className="stat-item">
              <h4>5 LPA</h4>
              <p>Average salary</p>
            </div>
            <div className="stat-item">
              <h4>500+</h4>
              <p>Companies hiring</p>
            </div>
            <div className="stat-item">
              <h4>1000+</h4>
              <p>Placed alumni</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
