import React, { useState } from "react";
import "./Login.scss";
import Input from "../../components/Input";
import { loginBannerImage, passwordIcon, userIcon } from "../../constants/assets";
import { Link, useNavigate } from "react-router-dom"; // Corrected import
import axios from 'axios';



function LoginPage() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8086/member/login1', loginData);
      console.log("Login response:", response.data);
      if(response.data.status) {
        // Save token to sessionStorage
        sessionStorage.setItem('authToken', response.data.token);
        // Navigate to Dashboard page on success
        navigate('/dashboard');
      } else {
        setLoginError(response.data.message); // Set login error message
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("An error occurred during login."); // Set a general login error message
    }
};


  return (
    <div className="container-fluid p-0 m-0 LoginPage__wrapper">
      <div className="row p-0 m-0">
        <div className="col-lg-6 col-md-12 col-sm-12 p-0 m-0 LoginPage__banner">
          <img src={loginBannerImage} alt="loginBannerImage" srcSet={loginBannerImage} />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 p-0">
          <form onSubmit={handleSubmit} className="LoginPage__form__area">
            <img src="Logo.png" alt="Logo" className="LoginPage__logo" />
            <div className="LoginPage__form__area__form__wrapper">
              <div className="LoginPage__form__area__form__headers">
                <h1>LOGIN</h1>
                <small>Sign in to your account</small>
              </div>
{/* Display login error message if it exists */}
              {loginError && <div className="login-error-message">{loginError}</div>}
              <Input icon={userIcon} placeholder="Email or Username" name="email" value={loginData.email} onChange={handleChange} />
              <Input icon={passwordIcon} placeholder="Password" type="password" name="password" value={loginData.password} onChange={handleChange} />
              <Link to="/forget-password">Forgot password?</Link>
              <button type="submit" className="form__submit">Sign in</button>
            </div>
            <p>Don't have an account? <Link to="/register">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;