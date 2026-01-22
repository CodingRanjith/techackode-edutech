import React, { useEffect } from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Internship from './pages/Internship';
import Bootcamps from './pages/Bootcamps';
import LMS from './pages/LMS';
import Placement from './pages/Placement';
import Contact from './pages/Contact';

// AOS & PureCounter Imports
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    new PureCounter();
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/bootcamps" element={<Bootcamps />} />
          <Route path="/lms" element={<LMS />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
