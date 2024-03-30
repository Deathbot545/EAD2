import React, { useState } from 'react';
import "./RegisterPage.scss";
import { registerBannerImage } from "../../constants/assets";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import axios from 'axios';

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    userName: '',
    email: '',
    age: '',
    weight: '',
    height: '',
    password: '',
    // confirmPassword: '' // Assuming you handle confirmation validation client-side
  });

  const handleChange = (e) => {
    const { name, value } = e.target; // Get name and value from the event target (input field)
    setFormData(prevState => ({
      ...prevState,
      [name]: value, // Dynamically set the state for each input field
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from causing a page reload

    // Here, implement any front-end validation if necessary
    console.log("Form data being sent to the server:", formData);

    try {
      // Adjust the URL to your API endpoint
      const response = await axios.post('http://localhost:8086/member/save', formData);
      console.log("Response from the server:", response.data);
      // Handle success - e.g., showing a success message or redirecting the user
    } catch (error) {
      console.error('Failed to register:', error);
      // Handle error - e.g., showing an error message
    }
  };

  return (
    <div className="container-fluid p-0 m-0 RegisterPage__wrapper">
      <div className="row p-0 m-0">
        <div className="col-lg-6 col-md-12 col-sm-12 p-0 m-0 RegisterPage__banner">
          <img
            src={registerBannerImage}
            alt="registerBannerImage"
            srcSet={registerBannerImage} // Corrected from srcset to srcSet for React
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 p-0">
          <div className="RegisterPage__form__area">
            <form onSubmit={handleSubmit} className="RegisterPage__form__area__form__wrapper"> {/* Changed to a form */}
              <div className="RegisterPage__form__area__form__headers mt-4">
                <img src="Logo.png" alt="Logo" />
                <div className="RegisterPage__form__area__form__headers__content">
                  <h1>SIGN UP</h1>
                  <small>Sign up to your account</small>
                </div>
              </div>
              <div className="RegisterPage__form__area__form mt-5">
                <div className="row m-0 p-0">
                  {/* Each input now includes name, value, and onChange */}
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                  <Input name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} />                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                  <Input name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} />                  </div>
                </div>
                {/* Continue adding Inputs for each field */}
                <Input name="userName" placeholder="User Name" value={formData.userName} onChange={handleChange} />
                <Input name="email" type="email" placeholder="E-mail" value={formData.email} onChange={handleChange} />
                <Input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
                <Input name="weight" placeholder="Weight" value={formData.weight} onChange={handleChange} />
                <Input name="height" placeholder="Height" value={formData.height} onChange={handleChange} />
                <Input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <Input name="confirmPassword" type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
              </div>
              <button type="submit" className="form__submit">Sign up</button> {/* Ensure this is of type submit */}
            </form>
            <p>
              Already have an account? <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
