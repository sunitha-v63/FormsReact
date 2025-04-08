import React, { useEffect, useRef, useState } from 'react';

function FocusForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const nameInputRef = useRef(null); 

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}`);
  };

  return (
    <>
    <h3>focus</h3>
    <form onSubmit={handleSubmit}>
      <input
        ref={nameInputRef} 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      /><br/>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      /><br/>
      <button type="submit">Submit</button>
    </form>
    </>
  );
}

export default FocusForm;
