import React from "react";
import "./Payment.scss";
import { Dumbbell_women } from "../../constants/assets";
import Select from "../../components/Select";
import Input from "../../components/Input";
import FileUpload from "../../components/FileUpload";
import { Link } from "react-router-dom";

function Payment() {
  return (
    <div className="container-fluid p-0 m-0 Payment__wrapper">
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
                />
                <Select
                  label="Memberhip type"
                  htmlFor="memberShip"
                  options={["Select membership", "Gold", "Silver"]}
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
                <button className="form__submit"> Submit</button>
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
