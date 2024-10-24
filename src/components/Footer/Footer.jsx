import React from 'react'
import './Footer.css'

const Footer = () => {

    const handleLinkClick = (e, targetId) => {
      e.preventDefault();

      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    };
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* leftside */}

        <div className="flexColstart f-left">
          <img src="./logo.png" alt="" width={60}></img>
          <br />
          <span className="secondaryText">We Build your dreams.</span>
        </div>

        <div className="flexColstart f-right">
          <span className="primaryText">Find Us Here</span> <br />
          <span className="secondaryText">
          
          </span>
          <div className="flexCenter f-menu secondaryText">
            <a
              className="link"
              href="../Residencies#R1"
              onClick={(e) => handleLinkClick(e, "#R1")}
            >
              Designs
            </a>
            <a
              href="../Value#V1"
              onClick={(e) => handleLinkClick(e, "#V1")}
              className="link"
            >
              Vision
            </a>
            <a
              className="link"
              href="../Contact#C1"
              onClick={(e) => handleLinkClick(e, "#C1")}
            >
              Contact
            </a>
            <a
              className="link"
              href="../GetStarted#G1"
              onClick={(e) => handleLinkClick(e, "#G1")}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer
