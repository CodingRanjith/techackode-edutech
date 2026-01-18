import React, { useState } from 'react';
import './Courses.css'; // Make sure CSS matches card style

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Course Data
  const coursesData = [
    { id: 1, title: 'LevelUP 360', category: 'web', price: '₹20,000', instructor: 'Sanjai Prabu', students: 450, image: '/assets/img/education/levelup360.webp' },
    { id: 2, title: 'Digital Marketing', category: 'marketing', price: '₹15,000', instructor: 'Shakthi Meena', students: 380, image: '/assets/img/education/digital-marketing.webp' },
    { id: 3, title: 'React Native (App Development)', category: 'mobile', price: '₹18,000', instructor: 'Gayathri', students: 290, image: '/assets/img/education/react-native.webp' },
    { id: 4, title: 'AI & Machine Learning', category: 'ai', price: '₹25,000', instructor: 'Soniya', students: 340, image: '/assets/img/education/ai-ml.webp' },
    { id: 5, title: 'Flutter App Development', category: 'mobile', price: '₹18,000', instructor: 'Gayathri', students: 290, image: '/assets/img/education/flutter.webp' },
    { id: 6, title: 'UI/UX Design with Figma', category: 'design', price: '₹10,000', instructor: 'Sanjay Kumar', students: 520, image: '/assets/img/education/ui-ux.webp' },
    { id: 7, title: 'Python for Beginners', category: 'backend', price: '₹12,000', instructor: 'Lufthar Nagar', students: 620, image: '/assets/img/education/python.webp' },
    { id: 8, title: 'Java Advanced', category: 'backend', price: '₹16,000', instructor: 'Banu', students: 280, image: '/assets/img/education/java.webp' },
  ];

  // Categories
  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'design', label: 'Design' },
  ];

  const filteredCourses = selectedCategory === 'all'
    ? coursesData
    : coursesData.filter(course => course.category === selectedCategory);

  return (
    <div className="courses-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Courses</h1>
          <p>Learn from industry experts with hands-on projects and real-time internships</p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section container">
        {/* Category Filters */}
        <div className="filter-buttons" data-aos="fade-up">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid" data-aos="fade-up" data-aos-delay="100">
          {filteredCourses.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} className="img-fluid" />
                <span className="course-price">{course.price}</span>
              </div>
              <div className="course-content">
                <h3>{course.title}</h3>
                <p className="instructor"><strong>Instructor:</strong> {course.instructor}</p>
                <p className="students">{course.students} students enrolled</p>
                <button className="btn-primary">View Course</button>
              </div>
            </div>
          ))}
        </div>

        {/* More Courses / Pagination */}
        {filteredCourses.length < coursesData.length && (
          <div className="more-courses text-center" data-aos="fade-up" data-aos-delay="200">
            <button className="btn-more" onClick={() => setSelectedCategory('all')}>
              Show All Courses
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
