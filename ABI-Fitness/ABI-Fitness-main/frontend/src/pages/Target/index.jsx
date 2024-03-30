import React, { useState } from "react";
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import "./Target.scss";
import MainLayout from "../../layouts/MainLayout";


export default function Target() {
  const [legDays, setLegDays] = useState('');
  const [armDays, setArmDays] = useState('');
  const [chestDays, setChestDays] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // Define isSuccess state here

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Retrieve token from session storage
    const authToken = sessionStorage.getItem('authToken');

    // Decode the token to get the member ID
    const decodedToken = jwtDecode(authToken);
    const memberId = decodedToken.sub; // Assuming 'sub' contains the member ID

    // After decoding the token, log the decoded token to verify its structure
console.log(decodedToken);
console.log(authToken);

    try {
      const response = await fetch('http://localhost:8086/target', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          legDays: parseInt(legDays, 10),
          armDays: parseInt(armDays, 10),
          chestDays: parseInt(chestDays, 10),
          memberId,
        }),
      });
      if (response.ok) {
        console.log("Target saved successfully");
        setIsSuccess(true); // Update the isSuccess state to true

        setLegDays('');
        setArmDays('');
        setChestDays('');
        setTimeout(() => setIsSuccess(false), 5000); // Reset isSuccess after 5 seconds
      } else {
        console.error("Failed to save target");
        setIsSuccess(false);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setIsSuccess(false);
    }
  };

  return (
    <MainLayout>
      <div className="container Target__wrapper">
        <h1>SET TARGET</h1>
        <small>Select your weekly target</small>
        {isSuccess && (
          <div className="success-message">
            Target successfully added!
          </div>
        )}
        <form onSubmit={handleSubmit} className="Target">
          <div className="card">
            <div className="card-body">
              <section>
                <span>Leg Days:</span>
                <input
                  type="number"
                  value={legDays}
                  onChange={(e) => setLegDays(e.target.value)}
                  className="Target__input"
                  min="0"
                />
              </section>
              <section>
                <span>Arm Days:</span>
                <input
                  type="number"
                  value={armDays}
                  onChange={(e) => setArmDays(e.target.value)}
                  className="Target__input"
                  min="0"
                />
              </section>
              <section>
                <span>Chest Days:</span>
                <input
                  type="number"
                  value={chestDays}
                  onChange={(e) => setChestDays(e.target.value)}
                  className="Target__input"
                  min="0"
                />
              </section>
            </div>
            <button type="submit" className="save-target-btn">Save Target</button>

            <h4>Don’t forget to update about your workout. <button>Dashboard</button></h4>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
