import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="G1">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">
            Get Started with Solid Home Deisgn and Engineers
          </span>
          <span className="secondaryText">
            Build your dream with innovative design and engineering solutions.
            <br />
            Let’s bring your vision to life—start your journey today!
          </span>

          <button className="button">
            <a href="@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted
