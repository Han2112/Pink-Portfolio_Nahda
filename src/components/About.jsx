import React from 'react';
import '../styles/About.css';
import { aboutData } from '../data/about';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="glass-panel p-5 text-center">
              
              {/* JUDUL */}
              <h2 className="section-title-left mb-4" style={{display: 'inline-block'}}>{aboutData.title}</h2>
              
              {/* --- FOTO PROFIL --- */}
              <div className="profile-container my-4">
                <img 
                  src={aboutData.profileImage} 
                  alt="Profile" 
                  className="about-profile-img" 
                />
              </div>

              {/* DESKRIPSI */}
              <p className="lead mb-5 mx-auto" style={{lineHeight: '1.8', maxWidth: '800px'}}>
                {aboutData.description}
              </p>
              
              {/* SKILLS */}
              <div className="text-center">
                <h5 className="fw-bold mb-4" style={{color: 'var(--color-dark)'}}>Technologies I Work With</h5>
                <div className="d-flex justify-content-center flex-wrap gap-3">
                  {aboutData.skills.map((skill, index) => (
                    <div key={index} className="tech-badge shadow-sm d-flex align-items-center gap-2">
                      {/* Icon */}
                      <img src={skill.icon} alt={skill.name} style={{width: '20px', height: '20px'}} />
                      {/* Nama Skill */}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;