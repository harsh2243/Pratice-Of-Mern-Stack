


import React, { useState } from "react";
import axios from "axios";

const Form= () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (err) => {
    const { id, value } = err.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (err) => {
    err.preventDefault();
    try {
      const response = await axios.post(
        "https://660fb7e3356b87a55c522c4d.mockapi.io/React",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form
      className="container mt-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-center mb-4">Form</h2>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name:
        </label>
        <input className="form-control" id="name" type="text" placeholder="Enter your name" value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">E-mail</label>
        <input className="form-control" id="email"  type="email" placeholder="Enter your email" value={formData.email}
        onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="phoneNumber">
          Phone Number:
        </label>
        <input className="form-control" id="phoneNumber" type="tel" placeholder="Enter your phone number" value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <button
        className="btn btn-primary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;