import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import './Courses.css';

// Import course images ( reusing existing ones )
import img1 from "../assets/img/education/students-9.webp";
import img2 from "../assets/img/education/campus-4.webp";
import img3 from "../assets/img/education/students-7.webp";
import img4 from "../assets/img/education/courses-3.webp";
import img5 from "../assets/img/education/courses-4.webp";
import img6 from "../assets/img/education/courses-5.webp";
import img7 from "../assets/img/education/courses-9.webp";
import img8 from "../assets/img/education/courses-12.webp";
import img9 from "../assets/img/education/courses-13.webp";

// Mock Data
const allCourses = [
  {
    id: 1,
    title: "LevelUP 360: The Complete Full Stack Development Bootcamp",
    category: "Development",
    level: "Advanced",
    price: "₹3,999",
    originalPrice: "₹12,499",
    duration: "12 Weeks",
    image: img1,
    instructor: "Sarah Johnson",
    rating: 4.8,
    ratingCount: 1240,
    students: 15420,
    badge: "Bestseller",
    bestseller: true
  },
  {
    id: 2,
    title: "Digital Marketing Mastery: SEO, Social Media & Ads",
    category: "Marketing",
    level: "Beginner",
    price: "₹1,499",
    originalPrice: "₹4,999",
    duration: "8 Weeks",
    image: img2,
    instructor: "Michael Chen",
    rating: 4.6,
    ratingCount: 850,
    students: 8350,
    badge: "New",
    bestseller: false
  },
  {
    id: 3,
    title: "React Native: Build Real World Mobile Apps",
    category: "Development",
    level: "Intermediate",
    price: "₹2,499",
    originalPrice: "₹8,999",
    duration: "10 Weeks",
    image: img3,
    instructor: "Dr. Emily Watson",
    rating: 4.9,
    ratingCount: 2100,
    students: 12800,
    badge: "Highest Rated",
    bestseller: true
  },
  {
    id: 4,
    title: "Data Science A-Z: Real-Life Data Science Exercises Included",
    category: "Data Science",
    level: "Intermediate",
    price: "₹2,999",
    originalPrice: "₹10,999",
    duration: "14 Weeks",
    image: img4,
    instructor: "David Lee",
    rating: 4.7,
    ratingCount: 950,
    students: 6150,
    badge: "Trending",
    bestseller: false
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals with Figma",
    category: "Design",
    level: "Beginner",
    price: "Free",
    originalPrice: "₹1,999",
    duration: "4 Weeks",
    image: img5,
    instructor: "Jessica Parker",
    rating: 4.5,
    ratingCount: 420,
    students: 15500,
    badge: "Free",
    bestseller: false
  },
  {
    id: 6,
    title: "The Complete Cybersecurity Bootcamp: Zero to Hero",
    category: "Cybersecurity",
    level: "Advanced",
    price: "₹4,499",
    originalPrice: "₹15,999",
    duration: "16 Weeks",
    image: img6,
    instructor: "Robert Brown",
    rating: 4.8,
    ratingCount: 620,
    students: 4120,
    badge: "Certified",
    bestseller: true
  },
  {
    id: 7,
    title: "Introduction to Cloud Computing on AWS",
    category: "Development",
    level: "Beginner",
    price: "Free",
    originalPrice: "₹999",
    duration: "6 Weeks",
    image: img7,
    instructor: "Amanda White",
    rating: 4.4,
    ratingCount: 310,
    students: 9200,
    badge: null,
    bestseller: false
  },
  {
    id: 8,
    title: "Advanced Machine Learning with Python",
    category: "Data Science",
    level: "Advanced",
    price: "₹3,499",
    originalPrice: "₹11,999",
    duration: "12 Weeks",
    image: img8,
    instructor: "Dr. Alan Grant",
    rating: 4.9,
    ratingCount: 450,
    students: 3180,
    badge: "Expert",
    bestseller: false
  },
  {
    id: 9,
    title: "Social Media Strategy for Business Growth",
    category: "Marketing",
    level: "Intermediate",
    price: "₹1,999",
    originalPrice: "₹5,999",
    duration: "5 Weeks",
    image: img9,
    instructor: "Sophia Green",
    rating: 4.7,
    ratingCount: 220,
    students: 2220,
    badge: null,
    bestseller: false
  }
];

export default function CoursesPage() {
  // State for filters
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  // Filter Categories
  const categories = ["All", "Development", "Marketing", "Data Science", "Design", "Cybersecurity"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const prices = ["All", "Free", "Paid"];
  // Duration ranges logic helper (simplified for demo)
  const durations = ["All", "Short (< 5 Weeks)", "Medium (5-12 Weeks)", "Long (> 12 Weeks)"];

  useEffect(() => {
    let result = allCourses;

    if (selectedCategory !== "All") {
      result = result.filter(course => course.category === selectedCategory);
    }
    if (selectedLevel !== "All") {
      result = result.filter(course => course.level === selectedLevel);
    }
    if (selectedPrice !== "All") {
      result = result.filter(course => {
        if (selectedPrice === "Free") return course.price === "Free";
        if (selectedPrice === "Paid") return course.price !== "Free";
        return true;
      });
    }
    if (selectedDuration !== "All") {
      result = result.filter(course => {
        // Parse "12 Weeks" to 12
        const weeks = parseInt(course.duration);
        if (selectedDuration.includes("Short")) return weeks < 5;
        if (selectedDuration.includes("Medium")) return weeks >= 5 && weeks <= 12;
        if (selectedDuration.includes("Long")) return weeks > 12;
        return true;
      });
    }

    setFilteredCourses(result);
  }, [selectedCategory, selectedLevel, selectedPrice, selectedDuration]);

  return (
    <div className="courses-page-wrapper">
      {/* Page Title */}
      <div className="page-title">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Browse Courses</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Courses</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section courses-list">
        <div className="container">
          <div className="row">
            {/* Sidebar Filters */}
            <div className="col-lg-3">
              <div className="course-filters">

                {/* Category Filter */}
                <div className="filter-group mb-4">
                  <h4>Category</h4>
                  {categories.map((cat) => (
                    <div className="form-check" key={cat}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="category"
                        id={`cat-${cat}`}
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <label className="form-check-label" htmlFor={`cat-${cat}`}>
                        {cat}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Level Filter */}
                <div className="filter-group mb-4">
                  <h4>Level</h4>
                  {levels.map((lvl) => (
                    <div className="form-check" key={lvl}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="level"
                        id={`lvl-${lvl}`}
                        checked={selectedLevel === lvl}
                        onChange={() => setSelectedLevel(lvl)}
                      />
                      <label className="form-check-label" htmlFor={`lvl-${lvl}`}>
                        {lvl}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Price Filter */}
                <div className="filter-group mb-4">
                  <h4>Price</h4>
                  {prices.map((prc) => (
                    <div className="form-check" key={prc}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="price"
                        id={`prc-${prc}`}
                        checked={selectedPrice === prc}
                        onChange={() => setSelectedPrice(prc)}
                      />
                      <label className="form-check-label" htmlFor={`prc-${prc}`}>
                        {prc}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Duration Filter */}
                <div className="filter-group mb-4">
                  <h4>Duration</h4>
                  {durations.map((dur) => (
                    <div className="form-check" key={dur}>
                      <input
                        className="form-check-input"
                        type="radio"
                        name="duration"
                        id={`dur-${dur}`}
                        checked={selectedDuration === dur}
                        onChange={() => setSelectedDuration(dur)}
                      />
                      <label className="form-check-label" htmlFor={`dur-${dur}`}>
                        {dur}
                      </label>
                    </div>
                  ))}
                </div>

                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => {
                    setSelectedCategory("All");
                    setSelectedLevel("All");
                    setSelectedPrice("All");
                    setSelectedDuration("All");
                  }}
                >
                  Reset Filters
                </button>

              </div>
            </div>

            {/* Courses Grid */}
            <div className="col-lg-9">
              <div className="row gy-4">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div key={course.id} className="col-md-6 col-lg-4" data-aos="fade-up">
                      <div className="course-card-premium h-100">
                        <Link to="#" className="course-card-link">
                          <div className="course-image-wrapper">
                            <img src={course.image} alt={course.title} className="img-fluid" />
                            {course.bestseller && (
                              <span className="badge-bestseller">Bestseller</span>
                            )}
                            {!course.bestseller && course.badge && (
                              <span className="badge-new">{course.badge}</span>
                            )}
                          </div>

                          <div className="course-body">
                            <h3 className="course-title">{course.title}</h3>
                            <p className="course-instructor">{course.instructor}</p>

                            <div className="course-rating">
                              <span className="rating-number">{course.rating}</span>
                              <div className="stars">
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className={`bi ${i < Math.floor(course.rating) ? 'bi-star-fill' : (i < course.rating ? 'bi-star-half' : 'bi-star')}`}></i>
                                ))}
                              </div>
                              <span className="rating-count">({course.ratingCount})</span>
                            </div>

                            <div className="course-price-row">
                              <span className="current-price">{course.price}</span>
                              {course.price !== 'Free' && (
                                <span className="original-price">{course.originalPrice}</span>
                              )}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h3>No courses found matching your filters.</h3>
                    <button
                      className="btn btn-link"
                      onClick={() => {
                        setSelectedCategory("All");
                        setSelectedLevel("All");
                        setSelectedPrice("All");
                        setSelectedDuration("All");
                      }}
                    >
                      Clear all filters
                    </button>
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
