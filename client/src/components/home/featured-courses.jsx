import React from "react";
import { Link } from "react-router-dom";

// Import course images
import students9 from "../../assets/img/education/students-9.webp";
import campus4 from "../../assets/img/education/campus-4.webp";
import students7 from "../../assets/img/education/students-7.webp";

// Import instructor images
import personF3 from "../../assets/img/person/person-f-3.webp";
import personM5 from "../../assets/img/person/person-m-5.webp";
import personF7 from "../../assets/img/person/person-f-7.webp";

export default function FeaturedCourses() {
  return (
    <section id="featured-courses" className="featured-courses section">
      
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Courses</h2>
        <p>
          Learn practical skills and gain real-world experience with our top programs.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">

          {/* Course Item 1: LevelUP 360 */}
          <CourseCard
            image={students9}
            badge="Featured"
            badgeClass="featured"
            price="$199"
            level="Advanced"
            duration="12 Weeks"
            title="LevelUP 360"
            description="A comprehensive program covering full-stack development, live projects, and real-world career readiness."
            instructorImage={personF3}
            instructorName="Sarah Johnson"
            instructorRole="Tech Mentor"
            rating="4.8"
            students="420 students"
            stars={4.8}
          />

          {/* Course Item 2: Digital Marketing */}
          <CourseCard
            image={campus4}
            badge="New"
            badgeClass="new"
            price="$149"
            level="Beginner"
            duration="8 Weeks"
            title="Digital Marketing"
            description="Learn SEO, social media marketing, and analytics to launch your career in digital marketing."
            instructorImage={personM5}
            instructorName="Michael Chen"
            instructorRole="Marketing Expert"
            rating="4.7"
            students="350 students"
            stars={4.7}
          />

          {/* Course Item 3: React Native (App Development) */}
          <CourseCard
            image={students7}
            badge="Certificate"
            badgeClass="certificate"
            price="$179"
            level="Intermediate"
            duration="10 Weeks"
            title="React Native (App Development)"
            description="Build cross-platform mobile apps using React Native and gain hands-on experience with live projects."
            instructorImage={personF7}
            instructorName="Dr. Emily Watson"
            instructorRole="Mobile App Developer"
            rating="4.9"
            students="280 students"
            stars={4.9}
          />

        </div>

        {/* More Courses */}
        <div className="more-courses text-center" data-aos="fade-up" data-aos-delay="500">
          <Link to="/courses" className="btn-more">
            View All Courses
          </Link>
        </div>

      </div>
    </section>
  );
}

/* ===============================
   Course Card Component
================================ */

function CourseCard({
  image,
  badge,
  badgeClass,
  price,
  level,
  duration,
  title,
  description,
  instructorImage,
  instructorName,
  instructorRole,
  rating,
  students,
  stars
}) {
  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up">
      <div className="course-card">
        <div className="course-image">
          <img src={image} alt={title} className="img-fluid" />
        </div>

        <div className="course-content">
          <div className="course-meta">
            <span className="level">{level}</span>
            <span className="duration">{duration}</span>
          </div>

          <h3>
            <Link to="#">{title}</Link>
          </h3>

          <p>{description}</p>

          <div className="course-stats">
            <div className="rating">
              {renderStars(stars)}
              <span>({rating})</span>
            </div>
            <div className="students">
              <i className="bi bi-people-fill"></i>
              <span>{students}</span>
            </div>
          </div>

          <Link to="/enroll" className="btn-course mt-3">
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
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
