import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section className="banner">
      <p className="subheading">Your Health is Our Priority</p>
      <h1 className="main-heading">
        Transform Your Clinic’s Operations <br /> with Clinix Sphere
      </h1>
      <div className="buttons">
        <button className="get-started">
          Get Started <AiOutlineArrowRight className="arrow-icon" />
        </button>
        <span className="or">or</span>
        <button className="request-demo">Request a Demo</button>
      </div>

      <div className="open-hours">
        <FiClock className="clock-icon" />
        <div className="hours">
          <h3>Open Hours</h3>
          <p>Mon - Fri | 08:00 AM to 05:00 PM</p>
          <p>Sat - Sun | 09:00 AM to 03:00 PM</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
