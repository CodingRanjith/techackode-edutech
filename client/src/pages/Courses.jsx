import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    title: "LevelUP 360: Full Stack Development",
    category: "Development",
    level: "Advanced",
    price: "Paid",
    duration: "12 Weeks",
    image: img1,
    instructor: "Sarah Johnson",
    rating: 4.8,
    students: 420,
    badge: "Featured"
  },
  {
    id: 2,
    title: "Digital Marketing Mastery",
    category: "Marketing",
    level: "Beginner",
    price: "Paid",
    duration: "8 Weeks",
    image: img2,
    instructor: "Michael Chen",
    rating: 4.7,
    students: 350,
    badge: "New"
  },
  {
    id: 3,
    title: "React Native App Development",
    category: "Development",
    level: "Intermediate",
    price: "Paid",
    duration: "10 Weeks",
    image: img3,
    instructor: "Dr. Emily Watson",
    rating: 4.9,
    students: 280,
    badge: "Certificate"
  },
  {
    id: 4,
    title: "Data Science with Python",
    category: "Data Science",
    level: "Intermediate",
    price: "Paid",
    duration: "14 Weeks",
    image: img4,
    instructor: "David Lee",
    rating: 4.8,
    students: 150,
    badge: "Popular"
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Beginner",
    price: "Free",
    duration: "4 Weeks",
    image: img5,
    instructor: "Jessica Parker",
    rating: 4.6,
    students: 500,
    badge: "Free"
  },
  {
    id: 6,
    title: "Cybersecurity Bootcamp",
    category: "Cybersecurity",
    level: "Advanced",
    price: "Paid",
    duration: "16 Weeks",
    image: img6,
    instructor: "Robert Brown",
    rating: 4.9,
    students: 120,
    badge: "Certified"
  },
  {
    id: 7,
    title: "Introduction to Cloud Computing",
    category: "Development",
    level: "Beginner",
    price: "Free",
    duration: "6 Weeks",
    image: img7,
    instructor: "Amanda White",
    rating: 4.5,
    students: 200,
  },
  {
    id: 8,
    title: "Advanced Machine Learning",
    category: "Data Science",
    level: "Advanced",
    price: "Paid",
    duration: "12 Weeks",
    image: img8,
    instructor: "Dr. Alan Grant",
    rating: 4.9,
    students: 180,
    badge: "Top Rated"
  },
  {
    id: 9,
    title: "Social Media Strategy",
    category: "Marketing",
    level: "Intermediate",
    price: "Paid",
    duration: "5 Weeks",
    image: img9,
    instructor: "Sophia Green",
    rating: 4.7,
    students: 220,
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
      result = result.filter(course => course.price === selectedPrice);
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
                    <div key={course.id} className="col-md-6 col-xl-4" data-aos="fade-up">
                      <div className="course-card modern-card h-100">
                        <div className="course-image">
                          <img src={course.image} alt={course.title} className="img-fluid" />
                          {course.badge && (
                            <span className="badge featured">{course.badge}</span>
                          )}
                          <span className="course-price">{course.price === "Paid" ? "$99+" : "Free"}</span>
                        </div>

                        <div className="course-content d-flex flex-column h-100">
                          <div className="course-meta mb-2">
                            <span className="badge bg-light text-dark me-2">{course.category}</span>
                            <span className="text-muted small"><i className="bi bi-bar-chart"></i> {course.level}</span>
                          </div>

                          <h3 className="mb-2"><Link to="#">{course.title}</Link></h3>
                          <p className="text-muted small mb-3">
                            <i className="bi bi-clock me-1"></i> {course.duration} |
                            <i className="bi bi-people ms-2 me-1"></i> {course.students} Learners
                          </p>

                          <div className="d-flex justify-content-between align-items-center mt-auto">
                            <div className="instructor d-flex align-items-center">
                              <i className="bi bi-person-circle fs-5 me-2 text-primary"></i>
                              <span className="small fw-bold">{course.instructor}</span>
                            </div>
                            <div className="rating text-warning small">
                              <i className="bi bi-star-fill"></i> {course.rating}
                            </div>
                          </div>

                          <Link to="/enroll" className="btn btn-primary btn-sm w-100 mt-3 rounded-pill">View Details</Link>
                        </div>
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
