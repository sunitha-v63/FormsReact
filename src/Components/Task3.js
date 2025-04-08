import React, { useState } from 'react';

function Task3() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    skills: [],
    country: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      const updatedSkills = checked
        ? [...formData.skills, value]
        : formData.skills.filter(skill => skill !== value);

      setFormData({ ...formData, skills: updatedSkills });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";

    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!formData.gender) tempErrors.gender = "Please select a gender";

    if (formData.skills.length === 0) tempErrors.skills = "Select at least one skill";

    if (!formData.country) tempErrors.country = "Please select a country";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Registered Data:", formData);
      alert("Form submitted successfully!");
      // Reset form
      setFormData({
        name: '',
        email: '',
        gender: '',
        skills: [],
        country: ''
      });
      setErrors({});
    }
  };

  return (
    <div>
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit}>
      
        <div>
          <label>Name:</label><br />
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Enter your name"
          />
          {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </div>

        {/* Email */}
        <div>
          <label>Email:</label><br />
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Enter your email"
          />
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        <div>
          <label>Gender:</label><br />
          <input 
            type="radio" 
            name="gender" 
            value="Male" 
            checked={formData.gender === "Male"} 
            onChange={handleChange} 
          /> Male
          <input 
            type="radio" 
            name="gender" 
            value="Female" 
            checked={formData.gender === "Female"} 
            onChange={handleChange} 
          /> Female
          {errors.gender && <div style={{ color: 'red' }}>{errors.gender}</div>}
        </div>

   
        <div>
          <label>Skills:</label><br />
          <input 
            type="checkbox" 
            name="skills" 
            value="HTML" 
            checked={formData.skills.includes("HTML")} 
            onChange={handleChange} 
          /> HTML
          <input 
            type="checkbox" 
            name="skills" 
            value="CSS" 
            checked={formData.skills.includes("CSS")} 
            onChange={handleChange} 
          /> CSS
          <input 
            type="checkbox" 
            name="skills" 
            value="JavaScript" 
            checked={formData.skills.includes("JavaScript")} 
            onChange={handleChange} 
          /> JavaScript
          {errors.skills && <div style={{ color: 'red' }}>{errors.skills}</div>}
        </div>

       
        <div>
          <label>Country:</label><br />
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">-- Select Country --</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <div style={{ color: 'red' }}>{errors.country}</div>}
        </div>

        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Task3;
