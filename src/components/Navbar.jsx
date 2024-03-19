// react-portfolio/src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  // Toggle for Navbar collapse
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Change navbar-light to navbar-dark, and bg-light to bg-dark */}
      <div className="container">
        <Link className="navbar-brand" to="/">Eric Grigor</Link>
        <button className="navbar-toggler" type="button" onClick={toggleNav} aria-controls="navbarNavDropdown" aria-expanded={isNavExpanded ? 'true' : 'false'} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavExpanded ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/resume">Resume</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bio">Bio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Projects</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cover-letter">Cover Letter</Link>
            </li>
            {/* Social Dropdown Here */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

