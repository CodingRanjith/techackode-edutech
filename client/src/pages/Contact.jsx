import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ThreeDMap from '../components/ThreeDMap';
import './Contact.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    alert("Thank you for reaching out! Our team will get back to you soon.");
  };

  return (
    <div className="contact-page-wrapper">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content" data-aos="fade-up">
            <nav className="contact-breadcrumbs">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <span className="current">Contact Us</span>
            </nav>
            <h1>Get in <span>Touch</span></h1>
            <p>Get in touch for course inquiries, career counseling, or collaboration opportunities. We're here to support your journey.</p>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
        </div>
      </section>

      {/* Contact Statistics / Highlights */}
      <section className="contact-info-cards container">
        <div className="info-grid">
          <div className="info-card-premium" data-aos="fade-up" data-aos-delay="100">
            <div className="icon-box"><i className="bi bi-geo-alt"></i></div>
            <h3>Our Locations</h3>
            <p><strong>Corporate Office:</strong> Bangalore, India<br /><strong>Regional Centers:</strong> Chennai & Madurai (Coming Soon)</p>
          </div>

          <div className="info-card-premium" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box"><i className="bi bi-telephone"></i></div>
            <h3>Call Us</h3>
            <p>+91 90807 43542<br />+91 74485 55060</p>
            <a href="tel:+919080743542" className="card-link">Call Now</a>
          </div>

          <div className="info-card-premium" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box"><i className="bi bi-envelope"></i></div>
            <h3>Email Support</h3>
            <p>contact@techackode.com<br />techackode@gmail.com</p>
            <a href="mailto:contact@techackode.com" className="card-link">Send Email</a>
          </div>

          <div className="info-card-premium" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box"><i className="bi bi-clock"></i></div>
            <h3>Working Hours</h3>
            <p>Mon - Sat: 9:00 AM - 6:00 PM<br />Support: 24/7 (Email/WhatsApp)</p>
            <span className="card-link status">Available Now</span>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5" data-aos="fade-right">
              <div className="contact-text-block">
                <span className="subtitle">Connect with us</span>
                <h2>Have a question? <span>Let's talk!</span></h2>
                <p>Whether you're a student looking for guidance, a professional aiming to upskill, or a company seeking hiring partners, we'd love to hear from you.</p>

                <div className="contact-perks">
                  <div className="perk">
                    <i className="bi bi-lightning-charge-fill"></i>
                    <span>Quick Response within 24 hours</span>
                  </div>
                  <div className="perk">
                    <i className="bi bi-headset"></i>
                    <span>Dedicated Student Support</span>
                  </div>
                  <div className="perk">
                    <i className="bi bi-people-fill"></i>
                    <span>Join our 15,000+ Student Community</span>
                  </div>
                </div>

                <div className="social-connect mt-5">
                  <h4>Follow us on Social Media</h4>
                  <div className="social-links-row">
                    <a href="#" className="s-link"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="s-link"><i className="bi bi-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/techackode/" target="_blank" rel="noreferrer" className="s-link"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7" data-aos="fade-left">
              <div className="contact-form-card">
                <h3>Send us a <span>Message</span></h3>
                <form onSubmit={handleSubmit} className="premium-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating-custom">
                        <input type="text" id="name" placeholder="Full Name" required />
                        <label htmlFor="name">Full Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating-custom">
                        <input type="email" id="email" placeholder="Email Address" required />
                        <label htmlFor="email">Email Address</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating-custom">
                        <input type="text" id="subject" placeholder="Subject" required />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating-custom">
                        <textarea id="message" rows="5" placeholder="Message" required></textarea>
                        <label htmlFor="message">How can we help you?</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" className="btn-send-message">
                        Send Message <i className="bi bi-send-fill ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Shoutout */}
      <section className="contact-faq-shoutout" style={{ paddingBottom: '80px' }}>
        <div className="container">
          <div className="shoutout-box shadow-lg" data-aos="flip-up">
            <div className="shoutout-content">
              <h3>Looking for quick answers?</h3>
              <p>Check out our course catalog or internship programs for detailed information.</p>
              <div className="d-flex gap-3 justify-content-center mt-4">
                <Link to="/courses" className="btn-white">Browse Courses</Link>
                <Link to="/internship" className="btn-white">Internships</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
