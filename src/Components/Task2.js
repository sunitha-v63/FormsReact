import React, { useState } from 'react';

function Task2() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);
      // Reset form
      setFormData({ name: '', email: '', password: '' });
    }
  };

  return (
    <div>
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            placeholder="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
          {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
        </label><br />

        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            placeholder="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </label><br />

        <label>
          Password:
          <input 
            type="password" 
            name="password" 
            placeholder="password" 
            value={formData.password} 
            onChange={handleChange} 
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </label><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Task2;
