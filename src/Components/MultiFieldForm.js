import { useState } from "react"; 
 
const MultiFieldForm = () => { 
  const [formData, setFormData] = useState({ name: "", email: "" }); 
 
  const handleChange = (event) => { 
    setFormData({ 
      ...formData, 
      [event.target.name]: event.target.value, 
    }); 
  }; 
 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    alert(`Name: ${formData.name}, Email: ${formData.email}`); 
  }; 
 
  return ( 
    <>
    <h3>MultiFieldForm</h3>
    <form onSubmit={handleSubmit}> 
      <input type="text" name="name" value={formData.name} 
onChange={handleChange} placeholder="Name" /> <br/>
      <input type="email" name="email" value={formData.email} 
onChange={handleChange} placeholder="Email" /> <br/>
      <button type="submit">Submit</button> 
    </form> 
    </>
  ); 
}; 
 
export default MultiFieldForm; 