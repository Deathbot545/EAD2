import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  callIcon,
  locationIcon,
  mailIcon,
  openIcon,
} from "../../constants/assets";
function Footer() {
  return (
    <footer>
      <section>
        <h5>
          <img src={locationIcon} alt="locationIcon" /> Location :
        </h5>
        <p>
          287, Bokundara, <br /> Piliyandala. <br /> 10300, <br /> Sri Lanka.
        </p>
      </section>
      <section>
        <h5>
          <img src={openIcon} alt="openIcon" /> Hours of Operation:
        </h5>
        <p>
          Monday-Friday: 5.00 AM - 10.00AM <br />
          Saturday: 5.00 AM - 5.00 PM
          <br /> Sunday: 10.00 AM - 5.00 PM
        </p>
      </section>
      <section>
        <h5>
          <img src={callIcon} alt="callIcon" /> Phone:
        </h5>
        <p>
          <Link to="tel:+94 768960666">+94 768960666</Link>
          <br />
          <Link to="tel:+94 768960667">+94 768960667</Link>
        </p>
        <h5>
          <img src={mailIcon} alt="mailIcon" /> Email :
        </h5>
        <p>
          <Link to="mailto:abifitness@gmail.com">abifitness@gmail.com</Link>
        </p>
      </section>
    </footer>
  );
}

export default Footer;
