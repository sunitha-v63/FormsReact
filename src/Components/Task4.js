import React, { useState } from 'react';

function Task4() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email format is invalid";
    }

    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Contact form submitted:", formData);
      alert("Message sent successfully!");

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <div style={{ maxWidth: '400px'}}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>

 
        <div>
          <label>Name:</label><br />
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your name"
            onChange={handleChange}
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>


        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your email"
            onChange={handleChange}
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

      
        <div>
          <label>Message:</label><br />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your message"
            onChange={handleChange}
            rows="4"
          />
          {errors.message && <div style={{ color: 'red' }}>{errors.message}</div>}
        </div>

        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Task4;
