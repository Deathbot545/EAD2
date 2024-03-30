import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from 'jwt-decode'; // Import jwt-decode
import "./Instructor.scss";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/Input";
import { arrowUpIcon, searchIcon } from "../../constants/assets";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


function Instructor() {
  const navigate = useNavigate();
  const [instructors, setInstructors] = useState([]);

  const images = [
    "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  useEffect(() => {
    const fetchInstructors = async () => {
      try {
        const response = await axios.get('http://localhost:8081/project-demo/instructors');
        const instructorsWithImages = response.data.map((instructor, index) => ({
          ...instructor,
          image: images[index % images.length],
        }));
        setInstructors(instructorsWithImages);
      } catch (error) {
        console.error("Error fetching instructors:", error);
      }
    };

    fetchInstructors();
  }, []);

  const handleSelectInstructor = async (instructorId) => {
    // Retrieve token from session storage
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
      alert("You must be logged in to select an instructor.");
      return;
    }
  
    // Decode the token to get the member ID
    const decodedToken = jwtDecode(authToken);
    const memberId = decodedToken.sub;
  
    try {
      // Update the member with the selected instructor's ID
      await axios.put(`http://localhost:8086/member/${memberId}/instructor`, {
        instructorId: instructorId,
      });
  
      alert("Instructor selected successfully!");
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (error) {
      console.error("Error selecting instructor:", error);
      alert("Failed to select instructor.");
    }
  };
  
  return (
    <MainLayout>
      <div className="container Instructor__wrapper">
        <div className="Instructor__header mb-5">
          <h1>Select Your Instructor</h1>
          <div className="Instructor__header__search">
            <Input
              type="search"
              placeholder="search"
              icon={searchIcon}
              wrapperStyles={{
                background: "transparent",
                border: "1px solid #D0D5DD",
              }}
            />
          </div>
        </div>
        <div className="row">
          {instructors.map((instructor) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={instructor.id}>
              <div className="card rounded shadow-sm">
              <img src={instructor.image} className="Instructor" alt={instructor.name} />
                <div className="card-body">
                  <small>{instructor.occupation}</small>
                  <Link className="name" to="#!">
                    <h4>{instructor.name}</h4>{" "}
                    <img src={arrowUpIcon} alt="arrowUpIcon" />
                  </Link>
                  <p>{instructor.description}</p>
                  <button onClick={() => handleSelectInstructor(instructor.id)}>Select</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default Instructor;
