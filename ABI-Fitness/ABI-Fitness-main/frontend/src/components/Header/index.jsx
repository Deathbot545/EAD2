import React, { useState } from "react";
import "./Header.scss";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Correctly import useNavigate here
import {
  aboutusIcon,
  dashboardIcon,
  logoutIcon,
  membershipIcon,
  menuIcon,
  targetIcon,
} from "../../constants/assets";

// The rest of your component...


function Header() {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate hook for redirection
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    // Clear the session storage or any other authentication storage mechanism you're using
    sessionStorage.clear();

    // Redirect to the default page (home or login)
    navigate('/'); // Use navigate for redirection
  };

  const links = [
    // Remove logout from links array if handling separately
    {
      id: 2,
      name: "Dashboard",
      path: "/dashboard",
      icon: dashboardIcon,
      active: location.pathname === "/dashboard",
    },
    {
      id: 3,
      name: "Set Target",
      path: "/target",
      icon: targetIcon,
      active: location.pathname === "/target",
    },
    {
      id: 5,
      name: "My Membership",
      path: "/membership",
      icon: membershipIcon,
      active: location.pathname === "/membership",
    },
    {
      id: 6,
      name: "About Us",
      path: "/about-us",
      icon: aboutusIcon,
      active: location.pathname === "/about-us",
    },
  ];

  return (
    <header>
      <Link to="/">
        <img src="/Logo.png" alt="logo" className="Header__logo" />
      </Link>
      <div className="Header__links">
        <ul className={open ? "active" : ""}>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.path} className={link.active ? "active" : ""}>
                <img src={link.icon} alt={link.name} />
                &nbsp;{link.name}
              </Link>
            </li>
          ))}
          <li>
            {/* Replacing Link with button for logout to execute logic on click */}
            <button onClick={handleLogout} className="logout-button">
        <img src={logoutIcon} alt="logoutIcon" />
        &nbsp;Log out
      </button>
          </li>
        </ul>
      </div>
      <img
        src={menuIcon}
        alt="menuIcon"
        className="Header__menuIcon"
        onClick={() => setOpen(!open)}
      />
    </header>
  );
}

export default Header;
