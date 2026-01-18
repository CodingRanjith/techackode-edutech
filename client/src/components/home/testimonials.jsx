import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


// Import all testimonial images
import personF2 from "../../assets/img/person/person-m-2.webp";
import personM5 from "../../assets/img/person/person-m-5.webp";
import personF9 from "../../assets/img/person/person-m-9.webp";
import personM11 from "../../assets/img/person/person-f-13.webp";
// import personF14 from "../../assets/img/person/person-m-4.webp";

// Left sidebar avatars
import personM3 from "../../assets/img/person/person-m-3.webp";
import personF7 from "../../assets/img/person/person-f-7.webp";
import personM9 from "../../assets/img/person/person-m-11.webp";
import personF4 from "../../assets/img/person/person-m-4.webp";


/* =========================
   TESTIMONIALS DATA
========================= */
const testimonialsData = [
  {
    text: "Techackode Edutech gave me real-time project experience during my internship. I worked on live applications, which helped me gain confidence and build a strong portfolio.",
    authorName: "Arjun Kumar",
    authorRole: "Final Year CSE Student",
    img: personM5,
  },
  {
    text: "The mentors at Techackode Edutech explain concepts practically with real-world examples. The hands-on learning approach made complex topics easy to understand.",
    authorName: "Sneha R",
    authorRole: "Python & Data Analytics Learner",
    img: personF7,
  },
  {
    text: "Unlike other platforms, Techackode focuses on skills and projects, not just certificates. The live internship helped me clear technical interviews confidently.",
    authorName: "Rahul Sharma",
    authorRole: "Junior Software Developer",
    img: personM9,
  },
  {
    text: "I joined Techackode Edutech as a career switcher. The structured learning, mentor support, and placement guidance helped me move into the IT industry.",
    authorName: "Divya K",
    authorRole: "Career Switcher",
    img: personF4,
  },
  {
    text: "The LMS platform is easy to use and well-structured. Recorded sessions, assignments, and projects helped me learn at my own pace without missing quality.",
    authorName: "Mohammed Irfan",
    authorRole: "Full Stack Learner",
    img: personF2,
  },
];


/* =========================
   TESTIMONIALS COMPONENT
========================= */
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      {/* SECTION TITLE */}
      <div className="container section-title" data-aos="fade-up">
        <h2>What Our Learners Say</h2>
        <p>
          Real stories from students and professionals who transformed their
          careers with Techackode Edutech.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* LEFT SIDEBAR */}
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="150">
            <div className="testimonials-sidebar">
              {/* AVATAR STACK */}
              <div className="avatar-stack">
  <img src={personM3} alt="Learner" className="avatar" />
  <img src={personF9} alt="Learner" className="avatar" />
  <img src={personM9} alt="Learner" className="avatar" />
  <img src={personM11} alt="Learner" className="avatar" />
  <span className="avatar-count">+1K</span>
</div>


              {/* SIDEBAR CONTENT */}
              <div className="sidebar-content">
                <span className="satisfied-badge">
                  <i className="bi bi-heart-fill"></i> Trusted by Learners
                </span>
                <h3>Success Stories That Inspire Confidence</h3>
                <p>
                  Our learners come from diverse backgrounds including students,
                  fresh graduates, working professionals, and career switchers.
                  What connects them is real learning and real outcomes.
                </p>
                <a href="#contact" className="btn-view-all">
                  Join Our Learners <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SLIDER */}
          <div className="col-lg-8" data-aos="fade-left" data-aos-delay="200">
            <Swiper
              loop={true}
              speed={700}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={24}
              pagination={{ clickable: true }}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              className="testimonials-carousel"
            >
              {testimonialsData.map((t, idx) => (
                <SwiperSlide key={idx}>
                  <div className="testimonial-card">
                    {/* TOP */}
                    <div className="card-top">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                      </div>
                      <span className="quote-mark">
                        <i className="bi bi-quote"></i>
                      </span>
                    </div>

                    {/* TEXT */}
                    <p className="testimonial-text">{t.text}</p>

                    {/* AUTHOR */}
                    <div className="author-info">
                      <img
                        src={t.img}
                        alt={t.authorName}
                        className="author-img"
                      />
                      <div className="author-details">
                        <h5>{t.authorName}</h5>
                        <span>{t.authorRole}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
