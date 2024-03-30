import React from "react";
import "./AboutUs.scss";
import MainLayout from "../../layouts/MainLayout";
import { aboutBannerImage } from "../../constants/assets";

function AboutUs() {
  return (
    <MainLayout>
      <div className="row px-3 m-0 AboutUs">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <p>
            At ABI Fitness, we're more than just a gym – we're your partners in
            achieving your fitness goals and embracing a healthier lifestyle.
            Located in the heart of [City/Area], we provide a welcoming and
            inclusive environment for fitness enthusiasts of all levels.
          </p>
          <h5>Our Mission:</h5>
          <p>
            Our mission at ABI Fitness is to empower individuals to unlock their
            full potential through fitness. We strive to cultivate a community
            where every member feels supported, motivated, and inspired to reach
            their goals, whether they're striving for strength, endurance,
            flexibility, or overall wellness.
          </p>
          <h5>Our Approach:</h5>
          <p>
            At ABI Fitness, we believe in a holistic approach to fitness that
            encompasses not only physical strength but also mental well-being.
            Our experienced trainers are dedicated to providing personalized
            guidance and support, tailored to your individual needs and
            aspirations. From customized workout plans to nutritional advice,
            we're here to help you every step of the way on your fitness
            journey.
          </p>
          <h5> Facilities:</h5>
          <p>
            Our state-of-the-art facilities boast top-of-the-line equipment,
            cutting-edge technology, and a variety of amenities to enhance your
            workout experience. Whether you prefer cardio, strength training,
            group classes, or functional fitness, ABI Fitness has everything you
            need to achieve your fitness objectives.
          </p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <img src={aboutBannerImage} alt="aboutBannerImage" />
        </div>
      </div>
      <div className="row px-3 m-0 AboutUs">
        <div className="col-12">
          <h5>Join ABI Fitness Today:</h5>
          <p>
            Whether you're a seasoned athlete or just starting your fitness
            journey, ABI Fitness welcomes you with open arms. Experience the
            difference with ABI Fitness and take the first step towards a
            healthier, happier you. Join us today and let's embark on this
            journey together! At ABI Fitness, it's not just about building
            muscle – it's about building a stronger, healthier, and more
            confident you.
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default AboutUs;
