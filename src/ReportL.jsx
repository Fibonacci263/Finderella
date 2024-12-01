import './Forms.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';


const LostForm = () => {

  const [values, setValues] = useState({
    itemname: '',
    date: '',
    email: '',
    contact: '',
    category: '',
    image: '',
    picture: '',
    description: '',
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const Reset = () => {
    setValues ({itemname: '', date: '', email: '', contact: '', description: '', category: '', image: ''})
  }
  return (
    <div className="container">
      <h1>
        Report Lost Item
      </h1>
      <form>
        <label htmlFor="itemname"> Item Name* </label>
        <input type="text" placeholder="Enter Item Name" name="itemname"
        onChange={(e) => handleChanges(e)} required value={values.itemname}/>

        <label htmlFor="date"> Date Lost* </label>
        <input type="date" placeholder="date" name="date"
        onChange={(e) => handleChanges(e)} required value={values.date}/> 

        <label htmlFor="email"> Email </label>
        <input type="email" placeholder="Enter Email" name="email"
        onChange={(e) => handleChanges(e)}/>

        <label htmlFor="contact"> Tel* </label>
        <input type="text" placeholder="Enter Phone Number" name="contact"
        onChange={(e) => handleChanges(e)} required value={values.contact}/>

        <label htmlFor="category">Category*</label>
        <select name="category" id="category" onChange={(e) => handleChanges(e)} value={values.contact} required>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="jewellery">Jewellery</option> 
        </select>

        <label htmlFor="picture"> Image</label>
        <input type="file" placeholder="Select Image" name="image"
        onChange={(e) => handleChanges(e)}/>

        <label htmlFor="description">Description*</label>
        <textarea name="description" id="description" cols="30" rows="10" 
        onChange={(e) => handleChanges(e)} required value={values.description} placeholder="Description"></textarea>

        <button type="button" onClick={Reset}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LostForm
