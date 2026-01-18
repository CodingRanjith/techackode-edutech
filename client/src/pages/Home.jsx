import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero.jsx'
import FeaturedCourses from '../components/home/featured-courses.jsx'
import Programs from '../components/home/programs.jsx'
import WhyUs from '../components/home/whyus.jsx'
import Testimonials from '../components/home/testimonials.jsx'
import CTA from '../components/home/cta.jsx'

export default function Landing() {
  // const services = [
  //   { title: 'Online Internship', desc: '4-week domain internship at ₹1,000', icon: '💼' },
  //   { title: 'Skill Courses', desc: 'Expert-led courses ₹10K–₹30K', icon: '🎓' },
  //   { title: 'Bootcamps', desc: '1-day intensive workshops ₹100–₹500', icon: '⚡' },
  //   { title: 'LMS Platform', desc: 'Recorded courses & certifications', icon: '📚' },
  //   { title: 'Placement Support', desc: 'Job readiness & placement assistance', icon: '🎯' },
  //   { title: 'Client Projects', desc: 'Real projects for experience & income', icon: '🚀' },
  // ]

  return (
    <div className="landing">
      <Hero />
      <FeaturedCourses />
      <Programs />
      <WhyUs />
      <Testimonials />
      <CTA />
      
    </div>
  )
}
