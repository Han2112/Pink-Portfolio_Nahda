import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-blob"></div>
      
      <div className="container">
        <div className="row justify-content-center align-items-center">

          <div className="col-lg-10 text-center">
            
            <h4 style={{ color: 'var(--color-medium)', fontWeight: '700', fontSize: '1.5rem' }}>
              Hi, Welcome.
            </h4>
            
            <h1 className="display-2 fw-bold mb-4" style={{ color: 'var(--color-dark)' }}>
              Im Nahda<br /> Network <span style={{borderBottom: '8px solid var(--color-light)'}}>Engginner.</span>
            </h1>

            <p className="lead text-muted mb-5 mx-auto" style={{ fontSize: '1.25rem', lineHeight: '1.6', maxWidth: '800px' }}>
              Creating visually stunning and user-friendly web interfaces. 
              Let's turn your ideas into a pastel-perfect reality.
            </p>

            <div className="d-flex gap-3 justify-content-center">
              <a href="#" className="btn-brand-lg">See CV</a>
              
              <a href="#contact" className="btn btn-outline-dark rounded-pill px-5 py-3 fw-bold" style={{fontSize: '1.1rem'}}>
                Contact Me
              </a>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;