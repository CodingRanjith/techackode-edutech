import ThreeDMap from '../components/ThreeDMap';

const Contact = () => {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Contact Us</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><a href="/">Home</a></li>
              <li className="current">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">

          {/* 3D Map */}
          <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
            <ThreeDMap />
          </div>

          <div className="row gy-4">
            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>Techackode Edutech Pvt. Ltd.<br />Virudhunagar, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>info@techackode.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-8">
              <form className="php-email-form" data-aos="fade-up" data-aos-delay="200" onSubmit={(e) => e.preventDefault()}>
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6 ">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
