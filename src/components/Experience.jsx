import React, { useState } from 'react';
import '../styles/Experience.css';
import { experienceData } from '../data/experience';

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        
        {/* JUDUL */}
        <div className="d-flex justify-content-between align-items-end mb-5">
          <h2 className="section-title-left mb-0">Experience</h2>
          <span className="text-muted">My professional journey</span>
        </div>

        {/* PENGALAMAN */}
        <div className="row g-4">
          {experienceData.map((item) => (
            <div key={item.id} className="col-md-6">
              <div 
                className="glass-panel h-100 position-relative exp-card-hover"
                style={{
                  borderLeft: `5px solid ${item.borderColor || 'var(--color-dark)'}`,
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedItem(item)}
              >
                {/* --- HEADER KARTU --- */}
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img 
                    src={item.icon} 
                    alt="icon" 
                    className="exp-icon-small" 
                  />
                  <span className="badge bg-white text-dark border">
                    {item.date}
                  </span>
                </div>

                <h4 style={{color: 'var(--color-dark)'}}>{item.role}</h4>
                <p className="fw-bold mb-2 text-muted">{item.company}</p>
                
                {/* Deskripsi Singkat */}
                <p className="small text-muted mb-0 desc-truncate">
                  {item.description}
                </p>

                <small className="click-details-text mt-3 d-block">
                  Click to see details...
                </small>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* --- MODAL DETAIL PENGALAMAN --- */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
            
            <button className="btn-close-modal" onClick={() => setSelectedItem(null)}>
              &times;
            </button>

            <div className="modal-header-custom mb-4 d-flex align-items-center gap-3">
               <img 
                 src={selectedItem.icon} 
                 alt="icon" 
                 className="exp-icon-small" 
                 style={{width: '60px', height: '60px'}} 
               />
               <div>
                  <h3 className="fw-bold mb-0" style={{color: 'var(--color-dark)'}}>
                    {selectedItem.role}
                  </h3>
                  <h5 className="text-muted mb-0">
                    {selectedItem.company}
                  </h5>
               </div>
            </div>

            <div className="modal-body-custom">
              <span className="badge mb-3" style={{backgroundColor: 'var(--color-light)', color: 'var(--color-dark)'}}>
                {selectedItem.date}
              </span>

              <p className="lead" style={{fontSize: '1rem', lineHeight: '1.8'}}>
                {selectedItem.fullDescription}
              </p>

              {selectedItem.gallery && selectedItem.gallery.length > 0 && (
                <div className="mt-4">
                  <h6 className="fw-bold border-bottom pb-2 mb-3">Documentation Gallery</h6>
                  <div className="row g-2">
                    {selectedItem.gallery.map((imgUrl, idx) => (
                      <div key={idx} className="col-6 col-md-4">
                        <img 
                          src={imgUrl} 
                          alt="Doc Thumbnail" 
                          className="img-fluid rounded shadow-sm border gallery-thumbnail cursor-pointer"
                          style={{width: '100%', height: '120px', objectFit: 'cover'}}
                          onClick={() => setSelectedImage(imgUrl)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {selectedImage && (
        <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <span className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</span>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Enlarged Documentation" />
          </div>
        </div>
      )}

    </section>
  );
};

export default Experience;