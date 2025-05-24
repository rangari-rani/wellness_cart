import { useState } from "react";
import './Contact.css';
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFocus = (e: { target: { name: any; }; }) => {
    const { name } = e.target;
    setFocus((prevFocus) => ({
      ...prevFocus,
      [name]: true
    }));
  };

  const handleBlur = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    if (value === "") {
      setFocus((prevFocus) => ({
        ...prevFocus,
        [name]: false
      }));
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission (e.g., sending data to an API or service)
    console.log(formData);
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img  className="square" alt="shape" />
      <div className="form">
      <div className="contact-info">
  <h3 className="title">Let's get in touch</h3>

  <p className="text center">
    <strong>About Us:</strong>
    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', textAlign: 'left' }}>
      <li>All-in-one store for fitness gear, recovery tools, and wellness supplements.</li>
      <li>Built as a full-stack CRUD ecommerce application for real-world experience.</li>
      <li>User-friendly design with clean, modern UI components.</li>
    </ul>
  </p>

  <p className="text center" style={{ marginTop: '1rem' }}>
    <strong>Contact Us:</strong>
    <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', textAlign: 'left' }}>
      <li>Have questions or feedback? We’re happy to help!</li>
      <li>Use the form to get in touch with us directly.</li>
      <li>We respond promptly to product and support inquiries.</li>
    </ul>
  </p>
</div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className={`input-container ${focus.name ? "focus" : ""}`}>
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className={`input-container ${focus.email ? "focus" : ""}`}>
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className={`input-container ${focus.phone ? "focus" : ""}`}>
              <input
                type="tel"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className={`input-container textarea ${focus.message ? "focus" : ""}`}>
              <textarea
                name="message"
                className="input"
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              ></textarea>
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
