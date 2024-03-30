import React, { useEffect, useRef, useState } from "react"; // Only one import statement for React
import "./Dashboard.scss";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Chart from "chart.js/auto";
import { dateGenerator, monthNameGenerator } from "../../util";
import { exportIcon } from "../../constants/assets";
import { jwtDecode } from 'jwt-decode'; 
import ProgressForm from '../Progress/index'; // Adjust the path as necessary
import { useHistory } from 'react-router-dom';

function Dashboard() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    // The redirection logic on modal close should be reviewed if it's actually needed here
  };

  const [userEmail, setUserEmail] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [chartType, setChartType] = useState("months"); // Also, there was a typo here (setChartTyp -> setChartType)
  const [count, setCount] = useState(12);
  const chartRef = useRef(null);

  
  const chartData = {
    labels:
      chartType === "months" ? monthNameGenerator(count) : dateGenerator(count),
    datasets: [
      {
        label: "My First Dataset",
        data: [60, 55, 85, 70, 51, 50, 325],
        fill: false,
        backgroundColor: "#F7F9FF",
        borderColor: "#6941c6",
        tension: 0.4,
      },
      {
        label: "My SEcond Dataset",
        data: [80, 70, 100, 20, 40, 35, 89.5, 50],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "#F7F9FF",
        tension: 0.4,
      },
    ],
  };

  

  useEffect(() => {
    // Decode the JWT token to get the user's email
    const token = sessionStorage.getItem('authToken'); // Retrieve the token
    if (token) {
      const decoded = jwtDecode(token); // Decode the token
      setUserEmail(decoded.email); // Set the email in the state
      setUserFirstname(decoded.firstname);
    }
  
    // Initialize the chart
    const chart = new Chart(chartRef.current, {
      type: "line",
      data: chartData,
    });
  
    return () => chart.destroy(); // Cleanup on unmount
  }, [chartData]); // Ensure useEffect runs again if chartData changes
  
 
  return (
    <MainLayout>
      <div className="container Dashboard__wrapper">
        <div className="row">
          <div className="col-lg-8 col-md-12-col-sm-12 Dashboard__chart__side">
            <small>Today is a</small>
            <ul>
              <li>
                <Input type="radio" /> <label> Leg Day</label>
              </li>
              <li>
                <Input type="radio" /> <label> Arm Day</label>
              </li>
              <li>
                <Input type="radio" /> <label> Chest Day</label>
              </li>
              <li>
                <Input type="radio" /> <label> Rest Day</label>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12-col-sm-12 Dashboard__bar__side user">
            <h5>
              Hey {userFirstname} - <span>here’s what’s happening </span>{" "}
            </h5>
    
          </div>
          <button onClick={toggleModal} className="open-progress-form-btn">Open Progress Form</button>

          {isModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ProgressForm />
            {/* Close button inside modal */}
            <span className="modal-close-x" onClick={() => setIsModalOpen(false)}>X</span>
          </div>
        </div>
      )}

        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12-col-sm-12 Dashboard__chart__side">
            <div className="card w-100 p-0 mt-2">
              <div className="card-header">
                <h5>Weight Report</h5>
                <ul>
                  <li>
                    <button className="filter__options active">
                      12 Months
                    </button>
                  </li>
                  <li>
                    <button className="filter__options">6 Months</button>
                  </li>
                  <li>
                    <button className="filter__options">30 Days</button>
                  </li>
                  <li>
                    <button className="filter__options">7 Days</button>
                  </li>
                </ul>
                <button>
                  <img src={exportIcon} alt="exportIcon" srcset={exportIcon} />
                  &nbsp; Export PDF
                </button>
              </div>
              <div className="card-body">
                <canvas ref={chartRef} className="w-100" />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12-col-sm-12  Dashboard__bar__side">
            <div className="card w-100">
              <div className="card-body">
                <div className="header__part">
                  <span> Target Completing Presentage</span>
                  <Select
                    options={["Last 7 Days"]}
                    wrapperStyles={{
                      border: "none",
                      backgroundColor: "transparent",
                      width: "60%",
                      fontSize: "12px",
                    }}
                  />
                </div>
                <div className="bars__warpper">
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Total workouts</small>
                      <small>81%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="81"></div>
                    </div>
                  </div>
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Arms</small>
                      <small>75%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="75"></div>
                    </div>
                  </div>
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Chest</small>
                      <small>79%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="79"></div>
                    </div>
                  </div>
                  <div className="bar__wrapper">
                    <div className="bar__wrapper__header">
                      <small>Legs</small>
                      <small>100%</small>
                    </div>
                    <div className="bar">
                      <div className="progress" data-progress="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total leg days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total arm days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total chest days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-12">
            <div className="card">
              <div className="card-body">
                <h6>Total workout days</h6>
                <h4>65</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
