import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import './Enroll.css';

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
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });

    useEffect(() => {
        if (location.state && location.state.courseTitle) {
            setFormData(prev => ({ ...prev, course: location.state.courseTitle }));
        }
    }, [location]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Congratulations! You've successfully initiated enrollment for: ${formData.course || 'Selected Course'}. Our admissions team will reach out within 24 hours.`);
        navigate('/');
    };

    return (
        <div className="enroll-page">
            {/* Premium Banner */}
            <section className="enroll-banner">
                <div className="container">
                    <div className="banner-content" data-aos="fade-down">
                        <h1>Start Your <span>Learning Journey</span></h1>
                        <p>Join thousands of students mastering the future of technology with Techackode.</p>
                    </div>
                </div>
            </section>

            <div className="checkout-container">
                <div className="container">
                    <div className="checkout-grid">

                        {/* Summary Sidebar */}
                        <aside className="summary-sidebar" data-aos="fade-right">
                            <div className="summary-card">
                                <h3>Enrollment <span>Summary</span></h3>

                                <div className="course-preview-box">
                                    <p className="small mb-1 uppercase fw-bold">Selected Course</p>
                                    <h4>{formData.course || "No course selected yet"}</h4>
                                    <p><i className="bi bi-clock me-2"></i> Lifetime Access Included</p>
                                </div>

                                <ul className="feature-list-simple">
                                    <li><i className="bi bi-check-circle-fill"></i> Industry Recognized Certificate</li>
                                    <li><i className="bi bi-check-circle-fill"></i> 1-on-1 Mentor Support</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Access to Discord Community</li>
                                    <li><i className="bi bi-check-circle-fill"></i> Career Placement Assistance</li>
                                </ul>

                                <div className="trust-badge-checkout">
                                    <p>Guaranteed Secure Checkout</p>
                                    <div className="secure-icons">
                                        <i className="bi bi-shield-check"></i>
                                        <i className="bi bi-credit-card-2-front"></i>
                                        <i className="bi bi-lock"></i>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Enrollment Form */}
                        <main className="form-main" data-aos="fade-left">
                            <div className="enroll-form-card">
                                <h2>Student <span>Information</span></h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group-premium">
                                                <label>Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    placeholder="e.g. Alex Johnson"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group-premium">
                                                <label>Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="+91 XXXXX XXXXX"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group-premium">
                                        <label>Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="alex@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="form-group-premium">
                                        <label>Confirm Your Course</label>
                                        <select
                                            name="course"
                                            required
                                            value={formData.course}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>-- Select a Course --</option>
                                            {courseList.map((course, idx) => (
                                                <option key={idx} value={course}>{course}</option>
                                            ))}
                                            <option value="Special Interest">Other / Special Request</option>
                                        </select>
                                    </div>

                                    <div className="form-group-premium">
                                        <label>Additional Notes (Optional)</label>
                                        <textarea
                                            name="message"
                                            rows="4"
                                            placeholder="Tell us about your background or specific goals..."
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                    </div>

                                    <button type="submit" className="btn-submit-premium">
                                        Complete Enrollment
                                        <i className="bi bi-arrow-right-short"></i>
                                    </button>
                                </form>

                                <div className="text-center mt-4">
                                    <p className="text-muted small">
                                        By clicking "Complete Enrollment", you agree to our
                                        <Link to="/terms" className="ms-1">Terms of Service</Link>.
                                    </p>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>
        </div>
    );
}
