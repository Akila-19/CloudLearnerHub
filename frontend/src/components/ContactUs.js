import React from 'react'
import  { useState } from 'react';
import './ContactUs.css'; 
function ContactUs() {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
  });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here (e.g., send data to server)
      console.log('Form data:', formData);
      // You can add further logic here, such as sending data to server using fetch or axios
  };

  return (
    <div className="container">
    <div className="content-wrapper">
        <div className="company-info">
            <h2>About CloudLearnerHub</h2>
            <p>CloudLearnerHub is a leading platform providing high-quality courses related to cloud technologies. We offer a wide range of courses covering topics such as cloud computing, DevOps, data engineering, and more.</p>
            <p>Our mission is to empower individuals and organizations with the knowledge and skills they need to succeed in the cloud era.</p>
            <h2>Follow Us</h2>
            <div className="social-icons">
                <a href="https://facebook.com/cloudlearnerhub" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/cloudlearnerhub" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://linkedin.com/company/cloudlearnerhub" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
        <div className="form-container">
            <header>
                <h1>Contact Us</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="4" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>
  );
}

export default ContactUs