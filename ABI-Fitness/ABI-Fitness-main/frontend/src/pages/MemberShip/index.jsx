import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode'; // Make sure jwt-decode is imported
import "./MemberShip.scss";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/Input";

export default function MemberShip() {
  const [instructorName, setInstructorName] = useState('');
  const [membershipType, setMembershipType] = useState(''); // Added state for membership type
  const [timePhase, setTimePhase] = useState(''); // Added state for time phase

  useEffect(() => {
    const fetchMemberAndPaymentDetails = async () => {
      const authToken = sessionStorage.getItem('authToken');
      if (!authToken) {
        console.error("You must be logged in.");
        return;
      }
  
      const decodedToken = jwtDecode(authToken);
      const memberId = decodedToken.sub; // Assuming 'sub' contains the member ID
  
      try {
        // Fetch the member details including the instructor ID
        const memberResponse = await axios.get(`http://localhost:8086/member/${memberId}`);
        if (memberResponse.data.instructorId) {
          const instructorResponse = await axios.get(`http://localhost:8081/project-demo/instructors/${memberResponse.data.instructorId}`);
          setInstructorName(instructorResponse.data.name); // Display instructor's name
        }
  
        // Fetch the latest payment details for the member to get membership type and time phase
        const paymentResponse = await axios.get(`http://localhost:8088/payments/member/${memberId}`);
        if (paymentResponse.data.length > 0) {
          const latestPayment = paymentResponse.data[0]; // Assuming you want the latest payment
          setMembershipType(latestPayment.membershipType);
          setTimePhase(latestPayment.timePhase);
        } else {
          console.log("No payment information found for member.");
          setMembershipType('N/A');
          setTimePhase('N/A');
        }
      } catch (error) {
        console.error("Failed to fetch member or payment details:", error);
      }
    };
  
    fetchMemberAndPaymentDetails();
  }, []);
  

  return (
    <MainLayout>
      <div className="container MemberShip__wrapper">
        <h1>My Membership</h1>
        <div className="membership">
          <div className="card">
            <div className="card-body">
              <section>
                <span>Membership Type :</span>
                <div className="membership__input">
                  <Input value={membershipType} readOnly />
                </div>
              </section>
              <section>
                <span>Time Phase :</span>
                <div className="membership__input">
                  <Input value={timePhase} readOnly />
                </div>
              </section>
              <section>
                <span>Instructor :</span>
                <div className="membership__input">
                  <Input value={instructorName} readOnly />
                </div>
              </section>
            </div>
            <h4>Next payment due in 6 months and 23 days. <button>Update Membership</button></h4>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}