import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Bootcamps.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const bootcampData = [
  {
    id: 1,
    title: 'MERN Stack Architecture',
    description: 'Master the art of building scalable web applications with MongoDB, Express, React, and Node.js.',
    date: 'Upcoming',
    time: '10:00 AM - 4:00 PM',
    price: '₹499',
    originalPrice: '₹1,999',
    duration: '2 Days',
    level: 'Intermediate',
    instructor: 'Industry Expert',
    tags: ['React', 'Node.js', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    seatsLeft: 15
  },
  {
    id: 2,
    title: 'Python for AI & ML',
    description: 'A high-intensity workshop focusing on Python libraries for Artificial Intelligence and Machine Learning.',
    date: 'Upcoming',
    time: '09:00 AM - 6:00 PM',
    price: '₹199',
    originalPrice: '₹999',
    duration: '1 Day',
    level: 'Beginner',
    instructor: 'Data Scientist',
    tags: ['Python', 'AI/ML'],
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800',
    seatsLeft: 10
  },
  {
    id: 3,
    title: 'Cybersecurity Essentials',
    description: 'Learn the fundamentals of ethical hacking and cybersecurity tools used by professionals.',
    date: 'Upcoming',
    time: '11:00 AM - 5:00 PM',
    price: '₹299',
    originalPrice: '₹1,499',
    duration: '2 Days',
    level: 'Beginner',
    instructor: 'Security Analyst',
    tags: ['Cybersecurity', 'Ethical Hacking'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    seatsLeft: 12
  }
];

const benefits = [
  {
    icon: 'bi-lightning-charge',
    title: '1-3 Day Sessions',
    description: 'Short-term intensive training designed for quick skill acquisition and practical implementation.'
  },
  {
    icon: 'bi-cpu',
    title: 'Trending Tech',
    description: 'Learn the most in-demand technologies currently used across the IT landscape.'
  },
  {
    icon: 'bi-award',
    title: 'Verified Certificates',
    description: 'Receive digital certificates verified by Techackode to boost your professional profile.'
  },
  {
    icon: 'bi-cash-stack',
    title: 'Affordable Pricing',
    description: 'High-quality workshops at prices accessible to every student and professional.'
  }
];

export default function Bootcamps() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bootcamps-page-wrapper">
      {/* Hero Section */}
      <section className="bootcamps-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <nav className="breadcrumbs">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <span>Bootcamps</span>
            </nav>
            <h1>Level Up with <span>Intensive Bootcamps</span></h1>
            <p>Short-term intensive workshops and webinars on practical skills and trending technology. Gain practical knowledge in just 1-3 days.</p>
            <div className="hero-badges">
              <span className="hero-badge"><i className="bi bi-check-circle-fill"></i> Hands-on Workshops</span>
              <span className="hero-badge"><i className="bi bi-check-circle-fill"></i> Trending Technologies</span>
              <span className="hero-badge"><i className="bi bi-check-circle-fill"></i> Affordable Pricing</span>
            </div>
          </div>
        </div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

      {/* Bootcamps Grid */}
      <section className="bootcamps-grid-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2>Upcoming <span>Workshops</span></h2>
            <p>Practical knowledge delivered through high-intensity learning sprints.</p>
          </div>

          <div className="bootcamps-grid">
            {bootcampData.map((bootcamp) => (
              <div key={bootcamp.id} className="bootcamp-card-wrapper" data-aos="zoom-in">
                <div className="bootcamp-modern-card">
                  <div className="card-image-box">
                    <img src={bootcamp.image} alt={bootcamp.title} />
                    <div className="card-labels">
                      <span className={`label-level ${bootcamp.level.toLowerCase()}`}>{bootcamp.level}</span>
                    </div>
                  </div>

                  <div className="card-body-content">
                    <div className="tag-row">
                      {bootcamp.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <h3>{bootcamp.title}</h3>
                    <p className="description">{bootcamp.description}</p>

                    <div className="info-grid">
                      <div className="info-item">
                        <i className="bi bi-calendar3"></i>
                        <span>{bootcamp.date}</span>
                      </div>
                      <div className="info-item">
                        <i className="bi bi-clock"></i>
                        <span>{bootcamp.time}</span>
                      </div>
                      <div className="info-item">
                        <i className="bi bi-hourglass-split"></i>
                        <span>{bootcamp.duration}</span>
                      </div>
                    </div>

                    <div className="card-footer-action">
                      <div className="price-container">
                        <span className="price-now">{bootcamp.price}</span>
                        <span className="price-old">{bootcamp.originalPrice}</span>
                      </div>
                      <Link to="/enroll" state={{ courseTitle: bootcamp.title }} className="btn-register">
                        Register Now <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bootcamps-benefits">
        <div className="container">
          <div className="benefits-container-inner">
            <div className="benefits-text" data-aos="fade-right">
              <h2>Why Techackode <span>Bootcamps?</span></h2>
              <p>We provide high-impact learning experiences that bridge the gap through intensive, practical training.</p>
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div key={index} className="benefit-item-modern">
                    <div className="benefit-icon-box">
                      <i className={`bi ${benefit.icon}`}></i>
                    </div>
                    <div className="benefit-content">
                      <h4>{benefit.title}</h4>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="benefits-image-box" data-aos="fade-left">
              <div className="experience-badge">
                <span className="number">100+</span>
                <span className="text">Live Projects</span>
              </div>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Students learning" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bootcamps-faq container">
        <div className="section-header" data-aos="fade-up">
          <h2>Got Questions? <span>We Have Answers</span></h2>
        </div>
        <div className="faq-grid" data-aos="fade-up">
          <div className="faq-card">
            <h4>Will I get a certificate?</h4>
            <p>Yes, every participant receives a verified digital certificate of completion from Techackode Edutech.</p>
          </div>
          <div className="faq-card">
            <h4>Are the sessions live?</h4>
            <p>Yes, our bootcamps include live workshops and interactive webinars conducted by industry experts.</p>
          </div>
          <div className="faq-card">
            <h4>Who can join these sessions?</h4>
            <p>Our bootcamps are open to college students, fresh graduates, and working professionals looking to upskill.</p>
          </div>
          <div className="faq-card">
            <h4>Is it practical-focused?</h4>
            <p>Absolutely. We prioritize hands-on workshops and real-world application over theoretical lectures.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bootcamps-cta" data-aos="zoom-out">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to transform your skills?</h2>
            <p>Join thousands of learners who have accelerated their careers with Techackode.</p>
            <div className="cta-buttons">
              <Link to="/courses" className="btn-light">View All Courses</Link>
              <Link to="/contact" className="btn-primary-custom">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
