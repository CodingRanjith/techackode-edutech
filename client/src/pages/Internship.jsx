import React, { useState } from 'react'
import './Internship.css'

export default function Internship() {
  const [formData, setFormData] = useState({ name: '', email: '', domain: '' })

  const domains = [
    'Full Stack Development',
    'React.js',
    'Python',
    'AI/ML',
    'Flutter',
    'Cybersecurity',
    'Web Design',
    'Data Science',
  ]

  return (
    <div className="internship-page">
      <section className="page-header">
        <div className="container">
          <h1>Online Internship Program</h1>
          <p>4-week domain-based internship at just ₹1,000</p>
        </div>
      </section>

      <section className="internship-section container">
        <div className="internship-grid">
          <div className="internship-content">
            <h2>What You'll Get</h2>
            <div className="benefits">
              <div className="benefit-item">
                <span className="icon">✓</span>
                <div>
                  <h4>Real Project Experience</h4>
                  <p>Work on actual client projects under mentor supervision</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="icon">✓</span>
                <div>
                  <h4>Expert Mentorship</h4>
                  <p>Get guidance from industry professionals</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="icon">✓</span>
                <div>
                  <h4>Certificate</h4>
                  <p>Earn a recognized certificate upon completion</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="icon">✓</span>
                <div>
                  <h4>Portfolio Building</h4>
                  <p>Add completed projects to your GitHub portfolio</p>
                </div>
              </div>
            </div>

            <div className="timeline">
              <h3>Program Timeline</h3>
              <div className="timeline-item">
                <div className="timeline-marker">Week 1-3</div>
                <div className="timeline-content">Project-based learning with weekly mentoring sessions</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">Week 4</div>
                <div className="timeline-content">Final mini project & evaluation</div>
              </div>
            </div>
          </div>

          <div className="signup-form">
            <h3>Apply Now</h3>
            <form>
              <input 
                type="text" 
                placeholder="Full Name" 
                required 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
              />
              <select required>
                <option value="">Select Domain</option>
                {domains.map((domain, idx) => (
                  <option key={idx} value={domain}>{domain}</option>
                ))}
              </select>
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
              />
              <textarea 
                placeholder="Why are you interested in this internship?" 
                rows="4"
              ></textarea>
              <button type="submit" className="btn-primary btn-lg">Enroll Now - ₹1,000</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
