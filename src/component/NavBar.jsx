import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home" onClick={() => scrollToSection('home')}>
          Your Logo
        </a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#testimonials" className="nav-link" onClick={() => scrollToSection('testimonials')}>
            Testimonials
          </a>
        </li>
        <li className="nav-item">
          <a href="#feedback" className="nav-link" onClick={() => scrollToSection('feedback')}>
            Feedback
          </a>
          </li>
          <li className="nav-item">
          <a href="#feedback" className="nav-link" onClick={() => scrollToSection(' CaseStudy')}>
            Case Study
          </a>
          </li>
          <li className="nav-item">
          <a href="#feedback" className="nav-link" onClick={() => scrollToSection('getTouch')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
