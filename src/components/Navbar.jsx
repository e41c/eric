// react-portfolio/src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Eric Grigor</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/cv">CV</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bio">Bio</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Social
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="https://github.com/e41c" target="_blank" rel="noopener noreferrer"><img src="/icons/icons8-github-50.png" alt="Github" className="social-icon" /> Github</a></li>
                <li><a className="dropdown-item" href="https://www.linkedin.com/in/eric-grigor/" target="_blank" rel="noopener noreferrer"><img src="/icons/icons8-linkedin-50.png" alt="LinkedIn" className="social-icon" /> LinkedIn</a></li>
                <li><a className="dropdown-item" href="https://www.instagram.com/le41cl" target="_blank" rel="noopener noreferrer"><img src="/icons/instagram-logo.png" alt="Instagram" className="social-icon" /> Instagram</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

