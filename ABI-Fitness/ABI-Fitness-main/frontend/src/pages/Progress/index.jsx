import React, { useState } from 'react';
import "./Progress.scss"
import { jwtDecode } from 'jwt-decode';  // Make sure this is correctly imported

export default function ProgressForm() {
    const [date, setDate] = useState('');
    const [calories, setCalories] = useState('');
    const [gymWorkingHours, setGymWorkingHours] = useState('');
    const [daySpecification, setDaySpecification] = useState('');
    const [drunkWater, setDrunkWater] = useState(false);
    const [supplementsTaken, setSupplementsTaken] = useState(false);
    const [unusualPain, setUnusualPain] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Retrieve token from session storage
    const authToken = sessionStorage.getItem('authToken');
  
    // Decode the token to get the member ID
    const decodedToken = jwtDecode(authToken);
    const memberId = decodedToken.sub; // Assuming 'sub' contains the member ID

    const progressData = {
      memberId, // Use the memberId extracted from the token
      date,
      calories: parseInt(calories, 10),
      gymWorkingHours: parseFloat(gymWorkingHours),
      daySpecification,
      drunkWater,
      supplementsTaken,
      unusualPain,
    };

    try {
      const response = await fetch('http://localhost:8086/member/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
        body: JSON.stringify(progressData),
      });

      if (response.ok) {
        setShowSuccessMessage(true); // Show success message
        // Reset the form fields here
        setDate('');
        setCalories('');
        setGymWorkingHours('');
        setDaySpecification('');
        setDrunkWater(false);
        setSupplementsTaken(false);
        setUnusualPain(false);

        // Hide success message after a few seconds
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 5000);
      } else {
        alert('Failed to save progress. Please try again.');
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="ProgressForm__wrapper"> 
    
      <div className="ProgressForm__content"> {/* Inner wrapper for content styling */}
        <h1>Log Your Progress</h1>
        {showSuccessMessage && (
        <div className="success-message">
          Progress added successfully!
        </div>
      )}
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Date"
          />
          <input
            type="number"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            placeholder="Calories Burned"
          />
          <input
            type="text"
            value={gymWorkingHours}
            onChange={(e) => setGymWorkingHours(e.target.value)}
            placeholder="Gym Working Hours"
          />
          <input
            type="text"
            value={daySpecification}
            onChange={(e) => setDaySpecification(e.target.value)}
            placeholder="Day Specification"
          />
          <label>
            Drank Water Today:
            <input
              type="checkbox"
              checked={drunkWater}
              onChange={(e) => setDrunkWater(e.target.checked)}
            />
          </label>
          <label>
            Took Supplements:
            <input
              type="checkbox"
              checked={supplementsTaken}
              onChange={(e) => setSupplementsTaken(e.target.checked)}
            />
          </label>
          <label>
            Felt Unusual Pain:
            <input
              type="checkbox"
              checked={unusualPain}
              onChange={(e) => setUnusualPain(e.target.checked)}
            />
          </label>
          <button type="submit" className="submit-btn">Submit Progress</button> {/* Apply submit-btn class here */}
        </form>
      </div>
    </div>
  );
  
}
