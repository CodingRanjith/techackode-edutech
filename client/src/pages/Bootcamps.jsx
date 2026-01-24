import React from 'react'
import './Bootcamps.css'

export default function Bootcamps() {
  const bootcamps = [
    { title: 'Weekend React Bootcamp', date: 'Nov 15-16', price: '₹499', duration: '2 days', level: 'Intermediate' },
    { title: '1-Day Python Crash Course', date: 'Nov 20', price: '₹199', duration: '8 hours', level: 'Beginner' },
    { title: 'Figma UI Design Sprint', date: 'Nov 22-23', price: '₹299', duration: '2 days', level: 'Beginner' },
    { title: 'Full Stack MERN Sprint', date: 'Dec 1-3', price: '₹599', duration: '3 days', level: 'Advanced' },
    { title: 'Web Performance Optimization', date: 'Dec 10', price: '₹249', duration: '1 day', level: 'Intermediate' },
    { title: 'DevOps Essentials', date: 'Dec 15-16', price: '₹449', duration: '2 days', level: 'Intermediate' },
  ]

  return (
    <div className="bootcamps-page">
      <section className="page-header">
        <div className="container">
          <h1>Bootcamps & Workshops</h1>
          <p>Intensive 1-day to 3-day workshops at ₹100–₹500</p>
        </div>
      </section>

      <section className="bootcamps-section container">
        <div className="bootcamps-grid">
          {bootcamps.map((boot, idx) => (
            <div key={idx} className="bootcamp-card">
              <div className="bootcamp-header">
                <h3>{boot.title}</h3>
                <span className="level">{boot.level}</span>
              </div>
              <div className="bootcamp-details">
                <div className="detail">
                  <span className="label">📅 Date:</span> {boot.date}
                </div>
                <div className="detail">
                  <span className="label">⏱️ Duration:</span> {boot.duration}
                </div>
                <div className="detail price">
                  <span className="label">💰 Price:</span> {boot.price}
                </div>
              </div>
              <button className="btn-primary">Register Now</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bootcamp-benefits container">
        <h2>Why Join Our Bootcamps?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <div className="benefit-icon">🎯</div>
            <h4>Hands-On Learning</h4>
            <p>Learn by doing with real-world projects</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">👥</div>
            <h4>Peer Network</h4>
            <p>Connect with like-minded learners</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">🏆</div>
            <h4>Certificate</h4>
            <p>Earn completion certificate</p>
          </div>
          <div className="benefit">
            <div className="benefit-icon">💼</div>
            <h4>Job Ready</h4>
            <p>Gain skills employers want</p>
          </div>
        </div>
      </section>
    </div>
  )
}
