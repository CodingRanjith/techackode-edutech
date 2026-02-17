import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Internship.css';

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

// Section images: place in public/images/internship/ (or use AI-generated assets)
const IMG = {
  hero: '/images/internship/internship-hero-workspace.png',
  worklogz: '/images/internship/internship-worklogz-section.png',
  roadmap: '/images/internship/internship-roadmap-section.png',
};

export default function Internship() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: '',
    phone: '',
    experienceLetterType: 'digital',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

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

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const howItWorks = [
    { step: '1', title: 'Apply', desc: 'Fill the form. Our team gets notified and you are added to the batch.', icon: 'bi bi-pencil-square' },
    { step: '2', title: 'Google Chat', desc: 'We add you to the team Google Chat. Your team lead guides you and you can ask doubts anytime.', icon: 'bi bi-chat-dots' },
    { step: '3', title: 'Worklogz', desc: 'You get login credentials and offer letter through our system. Worklogz manages the workspace.', icon: 'bi bi-briefcase' },
    { step: '4', title: 'Check-in / Check-out', desc: 'Login every day to check-in and check-out. Your team lead assigns tasks on Worklogz.', icon: 'bi bi-clock-history' }
  ];

  const weekPlan = [
    { phase: 'Weekdays', title: 'Learning & Tasks', desc: 'Team lead assigns tasks on Worklogz. Complete them and learn. Weekend task-based assignments included.' },
    { phase: 'Doubts?', title: 'Google Chat', desc: 'Ask your team lead on Google Chat. Your guide is just a message away.' },
    { phase: 'Final Week', title: 'Project & Experience Letter', desc: 'One project assigned. Complete and share in your group. Team reviews and you receive your experience letter.' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);
    if (GOOGLE_SCRIPT_URL) {
      try {
        const payload = new FormData();
        Object.keys(formData).forEach((key) => payload.append(key, formData[key] || ''));
        await fetch(GOOGLE_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body: payload });
        setSubmitSuccess(true);
      } catch (err) {
        setSubmitError('Submission failed. Please try again or contact us.');
      } finally {
        setSubmitting(false);
      }
    } else {
      console.log('Internship form:', formData);
      setSubmitSuccess(true);
      setSubmitting(false);
    }
  };

  return (
    <div className="internship-page">
      {/* Section 1: Hero — only "From" fee shown */}
      <section className="internship-section internship-hero">
        <div className="hero-bg-wrap">
          <div className="hero-shapes"></div>
        </div>
        <div className="container hero-container">
          <div className="hero-content" data-aos="fade-right">
            <span className="banner-badge">1-Month Real-Time Experience</span>
            <h1>Internship in <span>Your Tech Domain</span></h1>
            <p>Work like a real employee: daily check-in, tasks on Worklogz, Google Chat with your team lead, and a final project. Get your experience letter at the end.</p>
            <div className="price-tag-minimal">From ₹1,000</div>
          </div>
          <div className="hero-img-wrap" data-aos="fade-left">
            <img src={IMG.hero} alt="Internship workspace" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.add('show'); }} />
            <div className="hero-img-fallback"></div>
          </div>
        </div>
      </section>

      {/* Section 2: How It Works */}
      <section className="internship-section section-how">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">How It <span>Works</span></h2>
          <p className="section-subtitle" data-aos="fade-up">Once you fill the form, our team adds you to Google Chat and you get started with Worklogz.</p>
          <div className="steps-grid">
            {howItWorks.map((item, i) => (
              <div key={i} className="step-card" data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="step-num">{item.step}</div>
                <div className="step-icon"><i className={item.icon}></i></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Worklogz — worklogz.com reference */}
      <section className="internship-section section-worklogz">
        <div className="container section-worklogz-inner">
          <div className="worklogz-content" data-aos="fade-right">
            <span className="section-label">Our Workspace Platform</span>
            <h2 className="section-title text-left">Powered by <span>Worklogz</span></h2>
            <p className="worklogz-desc">
              We use <a href="https://worklogz.com/" target="_blank" rel="noopener noreferrer">Worklogz</a> — the complete business management platform — to run our workspace. From attendance to tasks, everything your company needs is in one place.
            </p>
            <ul className="worklogz-list">
              <li><i className="bi bi-check2-circle"></i> Offer letter & login credentials through the system</li>
              <li><i className="bi bi-check2-circle"></i> Daily check-in and check-out</li>
              <li><i className="bi bi-check2-circle"></i> Tasks assigned by your team lead on Worklogz</li>
            </ul>
          </div>
          <div className="worklogz-visual" data-aos="fade-left">
            <img src={IMG.worklogz} alt="Worklogz business management" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.add('show'); }} />
            <div className="worklogz-img-fallback"></div>
          </div>
        </div>
      </section>

      {/* Section 4: 4-Week Program Roadmap */}
      <section className="internship-section section-roadmap">
        <div className="container section-roadmap-inner">
          <div className="roadmap-visual" data-aos="fade-right">
            <img src={IMG.roadmap} alt="Program roadmap" onError={(e) => { e.target.style.display = 'none'; e.target.nextElementSibling?.classList.add('show'); }} />
            <div className="roadmap-img-fallback"></div>
          </div>
          <div className="roadmap-content" data-aos="fade-left">
            <span className="section-label">Structured Program</span>
            <h2 className="section-title text-left">4 Weeks, <span>Clear Path</span></h2>
            <div className="week-plan-list">
              {weekPlan.map((item, i) => (
                <div key={i} className="week-plan-item" data-aos="fade-up" data-aos-delay={i * 60}>
                  <div className="week-plan-phase">{item.phase}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Apply — form, no fee in heading */}
      <section className="internship-section section-apply">
        <div className="container">
          <h2 className="section-title" data-aos="fade-up">Apply <span>Now</span></h2>
          <p className="section-subtitle" data-aos="fade-up">Enter your details. We’ll add you to Google Chat and send Worklogz credentials.</p>
          <div className="premium-layout-grid apply-grid">
            <div className="apply-info-block" data-aos="fade-right">
              <div className="timeline-3d">
                <h3>Program <span>Roadmap</span></h3>
                <div className="timeline-track">
                  {weekPlan.map((step, i) => (
                    <div key={i} className="t-item">
                      <div className="t-dot"></div>
                      <div className="t-box">
                        <h5>{step.phase}</h5>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-muted mt-4 mb-2">Domains:</p>
                <ul className="domain-list-mini">
                  {domains.slice(0, 6).map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="form-column" data-aos="fade-left">
              <div className="apply-card-3d">
                <h3>Secure Your <span>Spot</span></h3>
                <p className="form-intro">Fill the form. Payment link will be shared after we confirm your slot.</p>
                {submitSuccess ? (
                  <div className="submit-success-msg">
                    <i className="bi bi-check-circle-fill"></i>
                    <h4>Application received!</h4>
                    <p>Our team will add you to Google Chat and share next steps soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="premium-input-group">
                      <input type="text" placeholder="Full Name *" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    </div>
                    <div className="premium-input-group">
                      <input type="email" placeholder="Email *" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </div>
                    <div className="premium-input-group">
                      <input type="tel" placeholder="Phone *" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
                    </div>
                    <div className="premium-input-group">
                      <select required value={formData.domain} onChange={(e) => setFormData({ ...formData, domain: e.target.value })}>
                        <option value="">Select Tech Domain *</option>
                        {domains.map((d, i) => <option key={i} value={d}>{d}</option>)}
                      </select>
                    </div>
                    <div className="premium-input-group">
                      <label className="input-label">Experience letter</label>
                      <select value={formData.experienceLetterType} onChange={(e) => setFormData({ ...formData, experienceLetterType: e.target.value })}>
                        <option value="digital">Digital</option>
                        <option value="hardcopy">Hard copy (courier)</option>
                      </select>
                    </div>
                    <div className="premium-input-group">
                      <textarea placeholder="Message (optional)" rows="3" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                    </div>
                    {submitError && <p className="form-error">{submitError}</p>}
                    <button type="submit" className="btn-enroll-3d" disabled={submitting}>
                      {submitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                    <p className="text-center mt-3 text-muted small"><i className="bi bi-shield-check me-1"></i> Secure. Payment link shared after confirmation.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
