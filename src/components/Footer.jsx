import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container text-center">
        <p className="mb-0 fw-bold">
          &copy; {new Date().getFullYear()} Created with React & Pastel Vibes.
        </p>
        <small style={{ opacity: 0.8 }}>Designed for you.</small>
      </div>
    </footer>
  );
};

export default Footer;