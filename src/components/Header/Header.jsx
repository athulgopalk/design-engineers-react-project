import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

 
  const handleLinkClick = (e, targetId) => {
    e.preventDefault(); 

    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} className="logo" />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a
              className="link"
              href="../Residencies"
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
            <button className="button">
              <a
                className="link"
                href="../Contact#C1"
                onClick={(e) => handleLinkClick(e, "#C1")}
              >
                Contact
              </a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* Menu icon for responsiveness */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <FaBars size={40} />
        </div>
      </div>
    </section>
  );
};

export default Header;
