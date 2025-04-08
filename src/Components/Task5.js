import React, { useState } from 'react';

function Task5() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    agreed: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.agreed) tempErrors.agreed = "You must agree to the terms";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Subscription form data:", formData);
      alert("Subscribed successfully!");

      setFormData({
        name: '',
        email: '',
        agreed: false
      });
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Subscription Form</h2>
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
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          /> I agree to the terms and conditions
          {errors.agreed && <div style={{ color: 'red' }}>{errors.agreed}</div>}
        </div>

        <br />
        <button type="submit" disabled={!formData.agreed}>
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Task5;
