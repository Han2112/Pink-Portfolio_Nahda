import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom shadow-sm">
      <div className="container">
        
        <a className="navbar-brand d-flex align-items-center gap-2" href="#hero">
          <img 
            src="https://ui-avatars.com/api/?name=My+Portfolio&background=B75C82&color=fff" 
            alt="Profile" 
            className="nav-logo" 
          />
          <span className="fw-bold">MyPortfolio</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item ms-lg-2">
                <a className="nav-link btn-contact" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;