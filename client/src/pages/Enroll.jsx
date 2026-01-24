import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';



const courseList = [
    "LevelUP 360: The Complete Full Stack Development Bootcamp",
    "Digital Marketing Mastery: SEO, Social Media & Ads",
    "React Native: Build Real World Mobile Apps",
    "Data Science A-Z: Real-Life Data Science Exercises Included",
    "UI/UX Design Fundamentals with Figma",
    "The Complete Cybersecurity Bootcamp: Zero to Hero",
    "Introduction to Cloud Computing on AWS",
    "Advanced Machine Learning with Python",
    "Social Media Strategy for Business Growth"
];

export default function Enroll() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectedCourse, setSelectedCourse] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    // Check for state passed from Courses page
    useEffect(() => {
        if (location.state && location.state.courseTitle) {
            setSelectedCourse(location.state.courseTitle);
            setFormData(prev => ({ ...prev, course: location.state.courseTitle }));
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (name === 'course') {
            setSelectedCourse(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        alert(`Thank you for enrolling in ${selectedCourse || 'our course'}! Our team will contact you shortly.`);
        navigate('/');
    };

    return (
        <div className="enroll-page">
            {/* Simple Header for Breadcrumbs */}
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Enroll Now</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li className="current">Enroll</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section className="enroll-section">
                <div className="container">
                    <div className="enroll-card" data-aos="fade-up">
                        <div className="enroll-header">
                            <h2>Join Techackode Edutech</h2>
                            <p>Take the first step towards your dream career.</p>
                        </div>

                        <div className="enroll-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row gy-3">
                                    <div className="col-md-6">
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phone" className="form-label">Phone Number</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder="+91 98765 43210"
                                            required
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="course" className="form-label">Select Course</label>
                                        <select
                                            className="form-select"
                                            id="course"
                                            name="course"
                                            required
                                            value={selectedCourse}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>-- Choose a Course --</option>
                                            {courseList.map((course, idx) => (
                                                <option key={idx} value={course}>{course}</option>
                                            ))}
                                            <option value="Other">Other / Custom Requirement</option>
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label">Message / Queries (Optional)</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            name="message"
                                            rows="3"
                                            placeholder="Any specific questions?"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-enroll-submit">
                                            Confirm Enrollment <i className="bi bi-arrow-right-circle ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <div className="text-center mt-4">
                                <p className="text-muted small mb-2"><i className="bi bi-shield-lock-fill"></i> Your data is secure with us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
