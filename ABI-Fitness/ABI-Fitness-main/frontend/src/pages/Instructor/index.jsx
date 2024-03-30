import React from "react";
import "./Instructor.scss";
import MainLayout from "../../layouts/MainLayout";
import Input from "../../components/Input";
import { arrowUpIcon, searchIcon } from "../../constants/assets";
import { Link } from "react-router-dom";
function Instructor() {
  const cards = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      occupation: "Consultant",
      name: "Arjuna Wimalaweera",
      description: "some Text",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/1978505/pexels-photo-1978505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      occupation: "Consultant",
      name: "Arunashantha Silva",
      description: "some Text",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      occupation: "Consultant",
      name: "John Doe",
      description: "some Text",
    },
  ];
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
          {cards.map((card) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={card.id}>
              <div className="card rounded shadow-sm">
                <img
                  src={card.image}
                  class="Instructor"
                  alt="body builder"
                ></img>
                <div className="card-body">
                  <small>{card.occupation}</small>
                  <Link className="name" to="#!">
                    <h4>{card.name}</h4>{" "}
                    <img src={arrowUpIcon} alt="arrowUpIcon" />
                  </Link>
                  <p>{card.description}</p>
                  <button>Select</button>
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
