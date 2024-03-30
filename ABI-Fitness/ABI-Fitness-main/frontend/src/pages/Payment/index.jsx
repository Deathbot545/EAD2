import React, { useState } from "react"; // Make sure to import useState
import "./Payment.scss";
import { Dumbbell_women } from "../../constants/assets";
import Select from "../../components/Select";
import Input from "../../components/Input";
import FileUpload from "../../components/FileUpload";
import { useNavigate, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import axios from "axios";


function Payment() {

  const [timePhase, setTimePhase] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // New state for success message visibility
  const navigate = useNavigate(); // For programmatically navigating

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authToken = sessionStorage.getItem('authToken');
    const decodedToken = jwtDecode(authToken);
    const memberId = decodedToken.sub;

    const paymentData = {
      memberId,
      timePhase,
      membershipType,
    };

    try {
      const response = await axios.post('http://localhost:8088/payments/process', paymentData);
      
      console.log({ memberId, timePhase, membershipType });

      setShowSuccessMessage(true); // Show success message
      setTimeout(() => {
        navigate('/instructor'); 
      }, 3000); // 3000 milliseconds = 3 seconds
    } catch (error) {
      console.error("Error submitting payment:", error);
    }
  };

  
  return (
    <div className="container-fluid p-0 m-0 Payment__wrapper">
      {showSuccessMessage && (
        <div className="success-message">
          Payment successful! Redirecting...
        </div>
      )}
      <div className="Payment__content">
        <div className="Payment__content__heading__wrapper">
          <img src="/Logo.png" alt="" />
          <div className="Payment__content__heading">
            <h1>PAYMENT</h1>
            <small>Select your fitness plan</small>
          </div>
        </div>
        <div className="card payment__card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 payment__card__form">
              <Select
  label="Time Phase"
  htmlFor="timePhase"
  options={["Select time phase", "Monthly", "Yearly"]}
  onChange={(e) => {
    console.log("New timePhase:", e.target.value);
    setTimePhase(e.target.value);
  }}
/>

<Select
  label="Membership type"
  htmlFor="memberShip"
  options={["Select membership", "Gold", "Silver"]}
  onChange={(e) => {
    console.log("New membershipType:", e.target.value);
    setMembershipType(e.target.value);
  }}
/>


                <span>Membership fee</span>
                <h3>0 LKR</h3>
                <FileUpload />
                <div className="payment__card__terms">
                  <Input type="checkbox" />{" "}
                  <p>
                    I certify that I have read and accept the{" "}
                    <Link to="/">Terms & Conditions.</Link>
                  </p>
                </div>
                <button className="form__submit" onClick={handleSubmit}>Submit</button>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 payment__card__left">
                <img src={Dumbbell_women} alt="Dumbbell_women" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
