import React, { useState, useEffect } from "react";
import axios from "axios";
import "./MemberShip.scss";
import MainLayout from "../../layouts/MainLayout";
import { jwtDecode } from 'jwt-decode';

export default function MemberShip() {
  const [instructors, setInstructors] = useState([]);
  const [membershipType, setMembershipType] = useState("");
  const [timePhase, setTimePhase] = useState("");
  const [paymentSlip, setPaymentSlip] = useState(null);

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get('http://localhost:8081/project-demo/instructors');
        setInstructors(response.data);
      } catch (error) {
        console.error("Failed to fetch instructors:", error);
      }
    };
    fetchInstructors();
  }, []);

  const handleFileChange = (e) => {
    setPaymentSlip(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page
  
    // Retrieve token from session storage
    const authToken = sessionStorage.getItem('authToken');
  
    // Decode the token to get the member ID
    const decodedToken = jwtDecode(authToken);
    const memberId = decodedToken.sub;
  
    const formData = new FormData();
    formData.append("memberId", memberId); // Set member ID from token
    formData.append("membershipType", membershipType);
    formData.append("paymentSlip", paymentSlip);
  
    try {
      await axios.post('http://localhost:8085/payments/process', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Payment processed successfully');
    } catch (error) {
      console.error("Failed to process payment:", error);
    }
  };
  
  return (
    <MainLayout>
      <form className="container MemberShip__wrapper" onSubmit={handleSubmit}>
        <h1>My Membership</h1>
        <div className="membership">
          <div className="card">
            <div className="card-body">
              {/* Membership Type Input */}
              <section>
                <span>Membership Type :</span>
                <input
                  type="text"
                  value={membershipType}
                  onChange={(e) => setMembershipType(e.target.value)}
                />
              </section>

              {/* Time Phase Input */}
              <section>
                <span>Time Phase :</span>
                <input
                  type="text"
                  value={timePhase}
                  onChange={(e) => setTimePhase(e.target.value)}
                />
              </section>

              {/* Instructors Dropdown */}
              <section>
                <span>Instructor :</span>
                <select onChange={(e) => console.log(`Instructor ID: ${e.target.value}`)}>
                  <option value="">Select Instructor</option>
                  {instructors.map((instructor) => (
                    <option key={instructor.id} value={instructor.id}>
                      {instructor.name}
                    </option>
                  ))}
                </select>
              </section>

              {/* Payment Slip Upload */}
              <section>
                <span>Payment Slip :</span>
                <input
                  type="file"
                  onChange={handleFileChange}
                />
              </section>

              <button type="submit">Update Membership</button>
            </div>
          </div>
        </div>
      </form>
    </MainLayout>
  );
}
