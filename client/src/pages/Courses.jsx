import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Courses.css';

// Import course images
import img1 from "../assets/img/education/students-9.webp";
import img3 from "../assets/img/education/students-7.webp";
import img4 from "../assets/img/education/courses-3.webp";
import img6 from "../assets/img/education/courses-5.webp";
import img8 from "../assets/img/education/courses-12.webp";
import img7 from "../assets/img/education/courses-9.webp";

// Updated Courses Data based on Techackode original content
const allCourses = [
  {
    id: 1,
    title: "MERN Stack Mastery: Full Stack Web Development",
    category: "Development",
    level: "Advanced",
    price: "₹3,999",
    originalPrice: "₹12,499",
    duration: "12 Weeks",
    image: img1,
    instructor: "Industry Mentor",
    rating: 4.9,
    ratingCount: 1540,
    students: 15420,
    badge: "Most Popular",
    bestseller: true
  },
  {
    id: 2,
    title: "Python for Data Science & AI/ML",
    category: "Data Science",
    level: "Intermediate",
    price: "₹2,999",
    originalPrice: "₹10,999",
    duration: "10 Weeks",
    image: img8,
    instructor: "AI Expert",
    rating: 4.8,
    ratingCount: 1200,
    students: 8350,
    badge: "Trending",
    bestseller: false
  },
  {
    id: 3,
    title: "Cybersecurity & Ethical Hacking Bootcamp",
    category: "Cybersecurity",
    level: "Advanced",
    price: "₹4,499",
    originalPrice: "₹15,999",
    duration: "14 Weeks",
    image: img6,
    instructor: "Security Professional",
    rating: 4.9,
    ratingCount: 980,
    students: 4120,
    badge: "Job Ready",
    bestseller: true
  },
  {
    id: 4,
    title: "Java Full Stack Development: Core to Cloud",
    category: "Development",
    level: "Intermediate",
    price: "₹3,499",
    originalPrice: "₹11,499",
    duration: "12 Weeks",
    image: img4,
    instructor: "Java Specialist",
    rating: 4.7,
    ratingCount: 850,
    students: 6150,
    badge: "Enterprise",
    bestseller: false
  },
  {
    id: 5,
    title: "React Native: Global App Development Sprint",
    category: "Development",
    level: "Intermediate",
    price: "₹2,499",
    originalPrice: "₹8,999",
    duration: "8 Weeks",
    image: img3,
    instructor: "Mobile Expert",
    rating: 4.8,
    ratingCount: 720,
    students: 5200,
    badge: "Fast Track",
    bestseller: false
  },
  {
    id: 6,
    title: "Cloud Computing with AWS Essentials",
    category: "Development",
    level: "Beginner",
    price: "Free",
    originalPrice: "₹1,999",
    duration: "6 Weeks",
    image: img7,
    instructor: "Cloud Architect",
    rating: 4.6,
    ratingCount: 1100,
    students: 12000,
    badge: "Free",
    bestseller: false
  }
];

export default function CoursesPage() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  // Filter Options
  const categories = ["All", "Development", "Data Science", "Cybersecurity"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  useEffect(() => {
    let result = allCourses;

    // Search Filter
    if (searchQuery) {
      result = result.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category Filter
    if (selectedCategory !== "All") {
      result = result.filter(course => course.category === selectedCategory);
    }

    // Level Filter
    if (selectedLevel !== "All") {
      result = result.filter(course => course.level === selectedLevel);
    }

    setFilteredCourses(result);
  }, [searchQuery, selectedCategory, selectedLevel]);

  return (
    <div className="courses-page-wrapper">
      {/* Premium Hero Banner */}
      <div className="courses-intro-banner">
        <div className="container">
          <div className="banner-content-box" data-aos="fade-up">
            <nav className="breadcrumbs-modern">
              <Link to="/">Home</Link>
              <i className="bi bi-chevron-right"></i>
              <span>Courses</span>
            </nav>
            <h1>Skill-Based <span>Instructor-Led Courses</span></h1>
            <p>Designed to develop job-ready technical skills with mentor support, practical training, and live projects.</p>

            <div className="search-container-premium">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="Find your career path..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">Search</button>
            </div>
          </div>
        </div>
        <div className="banner-visual-elements">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </div>

      <section className="courses-main-section">
        <div className="container">

          {/* Quick Category Chips */}
          <div className="category-chips-wrapper mb-5" data-aos="fade-up">
            <div className="category-chips">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`chip ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            {/* Sidebar Filters */}
            <div className="col-lg-3">
              <div className="filters-sidebar" data-aos="fade-right">
                <div className="filter-header">
                  <h3><i className="bi bi-sliders"></i> Filters</h3>
                  <button className="reset-link" onClick={() => {
                    setSelectedCategory("All");
                    setSelectedLevel("All");
                    setSearchQuery("");
                  }}>Reset</button>
                </div>

                <div className="filter-accordion">
                  {/* Level Filter */}
                  <div className="filter-section">
                    <h4>Skill Level</h4>
                    <div className="filter-options">
                      {levels.map(lvl => (
                        <label key={lvl} className="custom-checkbox">
                          <input
                            type="radio"
                            name="level"
                            checked={selectedLevel === lvl}
                            onChange={() => setSelectedLevel(lvl)}
                          />
                          <span className="checkmark"></span>
                          <span className="label-text">{lvl}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="promo-card">
                  <div className="promo-icon"><i className="bi bi-award"></i></div>
                  <p>Earn verified digital certificates for all completed courses!</p>
                  <Link to="/contact" className="btn-promo">Enquire Now</Link>
                </div>
              </div>
            </div>

            {/* Course Grid */}
            <div className="col-lg-9">
              <div className="results-info mb-4">
                <p>Showing <span>{filteredCourses.length}</span> programs</p>
              </div>

              <div className="row g-4">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div key={course.id} className="col-md-6 col-xl-4" data-aos="zoom-in">
                      <div className="premium-course-card">
                        <Link to="/enroll" state={{ courseTitle: course.title }} className="card-link">
                          <div className="card-img-container">
                            <img src={course.image} alt={course.title} />
                            <div className="card-badges">
                              {course.bestseller && <span className="badge-best">Bestseller</span>}
                              {course.badge && !course.bestseller && <span className="badge-trending">{course.badge}</span>}
                            </div>
                            <div className="content-overlay">
                              <span className="duration-tag"><i className="bi bi-clock"></i> {course.duration}</span>
                            </div>
                          </div>

                          <div className="card-content">
                            <div className="course-cat-row">
                              <span className="cat-label">{course.category}</span>
                            </div>
                            <h3 className="course-name">{course.title}</h3>
                            <p className="instructor-name">Mentor-Led Program</p>

                            <div className="rating-row">
                              <span className="rating-val">{course.rating}</span>
                              <div className="stars-mini">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className={`bi ${i < Math.floor(course.rating) ? 'bi-star-fill' : (i < course.rating ? 'bi-star-half' : 'bi-star')}`}></i>
                                ))}
                              </div>
                              <span className="reviews-count">({course.ratingCount})</span>
                            </div>

                            <div className="price-footer">
                              <div className="price-box">
                                <span className="price-now">{course.price}</span>
                                {course.price !== 'Free' && <span className="price-old">{course.originalPrice}</span>}
                              </div>
                              <div className="enroll-indicator">
                                Enroll Now <i className="bi bi-arrow-right-short"></i>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 py-5 text-center empty-state">
                    <h3>No Courses Found</h3>
                    <p>Try clearing your filters or searching for something else.</p>
                    <button className="btn btn-primary mt-3" onClick={() => {
                      setSelectedCategory("All");
                      setSelectedLevel("All");
                      setSearchQuery("");
                    }}>Clear Filters</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
