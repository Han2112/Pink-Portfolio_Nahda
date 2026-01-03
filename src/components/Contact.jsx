import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const SERVICE_ID = "service_9l3i19j";  
    const TEMPLATE_ID = "template_vha50ra"; 
    const PUBLIC_KEY = "1uowTU5s7kUidfiF0";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setIsSent(true);     
          setIsSending(false);
          e.target.reset();   
          setTimeout(() => {
            setIsSent(false);
          }, 5000);
      }, (error) => {
          console.log(error.text);
          alert("Failed to send. Please check your EmailJS IDs.");
          setIsSending(false);
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        
        <div className="text-center mb-5">
           <h2 className="section-title-center">Get In Touch</h2>
           <p className="text-muted">Feel free to drop a message regarding project or partnership.</p>
        </div>

        <div className="glass-panel p-0 overflow-hidden shadow-lg">
          <div className="row g-0">
            <div className="col-lg-5 p-5 d-flex flex-column justify-content-center position-relative" style={{background: 'var(--color-dark)', color: 'white'}}>
              <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)', pointerEvents: 'none'}}></div>
              
              <h3 className="fw-bold mb-4 position-relative">Let's Talk</h3>
              <p className="mb-5 position-relative" style={{opacity: 0.9, lineHeight: '1.6'}}>
                Have a project in mind or just want to say hi? I'm currently open for new opportunities.
              </p>
              
              <div className="mb-4 position-relative">
                <div className="d-flex align-items-center gap-3 mb-2">
                   <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="email" style={{width: '24px', filter: 'invert(1)'}}/>
                   <strong className="d-block">Email:</strong>
                </div>
                <span style={{opacity: 0.8, paddingLeft: '40px', display:'block'}}>nahdanabila12205@gmail.com</span>
              </div>
              
              <div className="position-relative">
                <div className="d-flex align-items-center gap-3 mb-2">
                   <img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt="loc" style={{width: '24px', filter: 'invert(1)'}}/>
                   <strong className="d-block">Location:</strong>
                </div>
                <span style={{opacity: 0.8, paddingLeft: '40px', display:'block'}}>Pekanbaru, Indonesia</span>
              </div>
            </div>
            <div className="col-lg-7 p-5 bg-white position-relative">
              
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="floating-group">
                      <input type="text" name="user_name" className="form-control" placeholder=" " required />
                      <label className="floating-label">Your Name</label>
                    </div>
                  </div>
                  
                  <div className="col-md-6 mb-4">
                    <div className="floating-group">
                      <input type="email" name="user_email" className="form-control" placeholder=" " required />
                      <label className="floating-label">Your Email</label>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="floating-group">
                    <textarea name="message" className="form-control" placeholder=" " style={{height: '150px'}} required></textarea>
                    <label className="floating-label">Message</label>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-brand-lg border-0 w-100 py-3 fw-bold shadow-sm"
                  disabled={isSending}
                  style={{ opacity: isSending ? 0.7 : 1, fontSize: '1.1rem' }}
                >
                  {isSending ? (
                    <span><span className="spinner-border spinner-border-sm me-2"></span>Sending...</span>
                  ) : (
                    "Send Message"
                  )}
                </button>
                {isSent && (
                  <div className="mt-4 text-center p-3 rounded animate__animated animate__fadeIn" style={{backgroundColor: '#d4edda', color: '#155724', border: '1px solid #c3e6cb'}}>
                    <h5 className="fw-bold mb-1">Thank You!</h5>
                    <p className="mb-0">Email has been sent, please wait for a response.</p>
                  </div>
                )}
                
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;