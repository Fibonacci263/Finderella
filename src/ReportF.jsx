import './Forms.css';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const FoundForm = () => {
  const [values, setValues] = useState({
    itemname: '',
    date: '',
    location: '',
    email: '',
    contact: '',
    category: '',
    image: null, // To handle file input
    description: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChanges = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setValues({ ...values, [name]: files[0] });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const Reset = () => {
    setValues({
      itemname: '',
      date: '',
      location: '',
      email: '',
      contact: '',
      category: '',
      image: null,
      description: '',
    });
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle the file and text inputs
    const formData = new FormData();
    formData.append('title', values.itemname);
    formData.append('description', values.description);
    formData.append('category', values.category);
    formData.append('location', values.location);
    formData.append('email', values.email);
    formData.append('phone', values.contact);
    formData.append('image', values.image);

    try {
      const response = await fetch('http://localhost:5000/api/found', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSuccessMessage('Found item successfully reported!');
        Reset(); // Clear the form
      } else {
        setErrorMessage('Failed to report the found item.');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred while reporting the found item.');
    }
  };

  return (
    <div className="container">
      <h1>Report Found Item</h1>
      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemname"> Item Name* </label>
        <input
          type="text"
          placeholder="Enter Item Name"
          name="itemname"
          onChange={handleChanges}
          required
          value={values.itemname}
        />

        <label htmlFor="date"> Date Found* </label>
        <input
          type="date"
          placeholder="Date"
          name="date"
          onChange={handleChanges}
          required
          value={values.date}
        />

        <label htmlFor="location"> Location Found* </label>
        <input
          type="text"
          placeholder="Enter Location Where Item Was Found"
          name="location"
          onChange={handleChanges}
          required
          value={values.location}
        />

        <label htmlFor="email"> Email* </label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChanges}
          value={values.email}
        />

        <label htmlFor="contact"> Tel* </label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          name="contact"
          onChange={handleChanges}
          required
          value={values.contact}
        />

        <label htmlFor="category">Category*</label>
        <select
          name="category"
          id="category"
          onChange={handleChanges}
          value={values.category}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="jewellery">Jewellery</option>
          <option value="documents">Documents</option>
        </select>

        <label htmlFor="picture"> Image </label>
        <input
          type="file"
          name="image"
          onChange={handleChanges}
          accept="image/*"
        />

        <label htmlFor="description">Description*</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleChanges}
          required
          value={values.description}
          placeholder="Description"
        ></textarea>

        <button type="button" onClick={Reset}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FoundForm;
