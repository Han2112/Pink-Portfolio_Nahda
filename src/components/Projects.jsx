import React, { useState } from 'react';
import '../styles/Projects.css';
import { projectData } from '../data/projects';

const Projects = () => {
  const [expandedDesc, setExpandedDesc] = useState({});

  const toggleDesc = (id) => {
    setExpandedDesc((prev) => ({
      ...prev,
      [id]: !prev[id] 
    }));
  };


  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]); 
  const [photoIndex, setPhotoIndex] = useState(0); 

  const openLightbox = (gallery, index) => {
    setCurrentImages(gallery);
    setPhotoIndex(index);
    setLightboxOpen(true);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev + 1) % currentImages.length); 
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    setPhotoIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length); 
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        
        <h2 className="section-title-left">Projects</h2>
        
        {projectData.map((project, index) => {
 
          const isExpanded = expandedDesc[project.id];
          const text = project.description;
          const shouldTruncate = text.length > 120; 
          const displayText = isExpanded || !shouldTruncate ? text : text.slice(0, 120) + "... ";

          return (
            <div key={project.id} className={`row align-items-center project-row ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              
              {/* --- BAGIAN GAMBAR --- */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="project-gallery-slider shadow-sm">
                  {project.gallery.map((imgUrl, imgIndex) => (
                    <div key={imgIndex} className="slider-item">
                      <img 
                        src={imgUrl} 
                        alt={`Slide ${imgIndex}`} 
                        onClick={() => openLightbox(project.gallery, imgIndex)}
                        style={{cursor: 'zoom-in'}} 
                      />
                    </div>
                  ))}
                  
                  <div className="slider-hint">
                    <span>Scroll or Click &rarr;</span>
                  </div>
                </div>
              </div>

              {/* --- TEKS DESKRIPSI --- */}
              <div className="col-lg-7">
                <div className="p-lg-4">
                  <h3 className="fw-bold mb-3" style={{color: 'var(--color-dark)', fontSize: '1.8rem'}}>
                    {project.title}
                  </h3>

                  <div className="text-muted mb-4 lead" style={{fontSize: '1.1rem'}}>
                    {displayText}
                    
                    {shouldTruncate && (
                      <span 
                        className="show-more-btn" 
                        onClick={() => toggleDesc(project.id)}
                      >
                        {isExpanded ? " Show Less" : "Show More"}
                      </span>
                    )}
                  </div>

                  <div className="mb-4 d-flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <div key={i} className="tech-tag-sm d-flex align-items-center gap-2">
                        <img src={tag.icon} alt={tag.name} style={{width: '18px', height: '18px'}} />
                        <span>{tag.name}</span>
                      </div>
                    ))}
                  </div>

                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-brand-lg d-inline-flex align-items-center gap-2" 
                    style={{fontSize: '0.95rem', padding: '12px 30px'}}
                  >
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/25/25231.png" 
                      alt="git" 
                      style={{width: '20px', filter: 'invert(1)'}} 
                    />
                    Code
                  </a>

                </div>
              </div>

            </div>
          );
        })}

      </div>

      {/* --- LIGHTBOX  --- */}
      {lightboxOpen && (
        <div className="proj-lightbox-overlay" onClick={() => setLightboxOpen(false)}>

          <span className="proj-lightbox-close">&times;</span>

          <button className="proj-nav-btn prev" onClick={prevPhoto}>&#10094;</button>

          <div className="proj-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentImages[photoIndex]} alt="Enlarged Project" />
            <div className="proj-counter">
              {photoIndex + 1} / {currentImages.length}
            </div>
          </div>

          <button className="proj-nav-btn next" onClick={nextPhoto}>&#10095;</button>

        </div>
      )}

    </section>
  );
};

export default Projects;