import React from "react";
import { Link } from "react-router-dom";

// Import course images
import levelup360Img from "../assets/img/education/students-9.webp";
import digitalMarketingImg from "../assets/img/education/campus-4.webp";
import reactNativeImg from "../assets/img/education/students-7.webp";

// Import instructor images
import instructorSarah from "../assets/img/person/person-f-3.webp";
import instructorMichael from "../assets/img/person/person-m-5.webp";
import instructorEmily from "../assets/img/person/person-f-7.webp";

export default function FeaturedCourses() {
  const courses = [
    {
      id: 1,
      image: levelup360Img,
      badge: "Featured",
      badgeClass: "featured",
      price: "$199",
      level: "Advanced",
      duration: "12 Weeks",
      title: "LevelUP 360",
      description: "A comprehensive program covering full-stack development, live projects, and real-world career readiness.",
      instructorImage: instructorSarah,
      instructorName: "Sarah Johnson",
      instructorRole: "Tech Mentor",
      rating: 4.8,
      students: 420,
    },
    {
      id: 2,
      image: digitalMarketingImg,
      badge: "New",
      badgeClass: "new",
      price: "$149",
      level: "Beginner",
      duration: "8 Weeks",
      title: "Digital Marketing",
      description: "Learn SEO, social media marketing, and analytics to launch your career in digital marketing.",
      instructorImage: instructorMichael,
      instructorName: "Michael Chen",
      instructorRole: "Marketing Expert",
      rating: 4.7,
      students: 350,
    },
    {
      id: 3,
      image: reactNativeImg,
      badge: "Certificate",
      badgeClass: "certificate",
      price: "$179",
      level: "Intermediate",
      duration: "10 Weeks",
      title: "React Native (App Development)",
      description: "Build cross-platform mobile apps using React Native and gain hands-on experience with live projects.",
      instructorImage: instructorEmily,
      instructorName: "Dr. Emily Watson",
      instructorRole: "Mobile App Developer",
      rating: 4.9,
      students: 280,
    },
  ];

  return (
    <section id="featured-courses" className="featured-courses section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Courses</h2>
        <p>Learn practical skills and gain real-world experience with our top programs.</p>
      </div>

      {/* Courses Grid */}
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {courses.map((course) => (
            <div key={course.id} className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="course-card modern-card">
                
                {/* Course Image */}
                <div className="course-image">
                  <img src={course.image} alt={course.title} className="img-fluid" />
                  <span className={`badge ${course.badgeClass}`}>{course.badge}</span>
                  <span className="course-price">{course.price}</span>
                </div>

                {/* Course Content */}
                <div className="course-content">
                  <div className="course-meta">
                    <span className="level">{course.level}</span>
                    <span className="duration">{course.duration}</span>
                  </div>

                  <h3>
                    <Link to="#">{course.title}</Link>
                  </h3>
                  <p className="course-description">{course.description}</p>

                  {/* Instructor Info */}
                  <div className="instructor-info">
                    <img src={course.instructorImage} alt={course.instructorName} className="instructor-img" />
                    <div className="instructor-details">
                      <h6>{course.instructorName}</h6>
                      <span>{course.instructorRole}</span>
                    </div>
                  </div>

                  {/* Stats: Rating & Students */}
                  <div className="course-stats">
                    <div className="rating">
                      {renderStars(course.rating)}
                      <span>({course.rating})</span>
                    </div>
                    <div className="students">
                      <i className="bi bi-people-fill"></i>
                      <span>{course.students} students</span>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <Link to="/enroll" className="btn-course mt-3">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Courses */}
        <div className="more-courses text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <Link to="/courses" className="btn-more">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   Star Renderer
================================ */
function renderStars(count) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(count)) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    } else if (i === Math.ceil(count) && count % 1 !== 0) {
      stars.push(<i key={i} className="bi bi-star-half"></i>);
    } else {
      stars.push(<i key={i} className="bi bi-star"></i>);
    }
  }
  return stars;
}
