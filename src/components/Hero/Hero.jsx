import React, { useState } from "react"; 
import "./Hero.css"; 
import { HiMail } from "react-icons/hi"; 
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  const [email, setEmail] = useState(""); 

  const handleSubmit = () => {
    const mailtoLink = `mailto:@gmail.com?subject=New Subscription&body=${encodeURIComponent(
      email
    )}`;
    window.location.href = mailtoLink; 
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* leftside */}
        <div className="flexColStart hero-left">
          {/* title */}
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "spring" }}
            >
              Solid <br /> Home <br />
              <a className="primaryText hero-tit" style={{ color: "grey" }}>
                {" "}
                Design & Engineers
              </a>
            </motion.h1>
          </div>
          {/* description */}
          <div className="flexColStart hero-des">
            <span className="secondaryText">We Build your dreams.</span>
            <span className="secondaryText">
              Building Dreams with Integrity, Innovation, and Lasting
              Excellence.
            </span>
          </div>

          {/* searchbar */}
          <div className="flexCenter subscribe-bar">
            <HiMail color="var(--blue)" size={25} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <button className="button" onClick={handleSubmit}>
              Get Started
            </button>
          </div>

          <div className="flexCenter stats">
            {/* Counting number */}
            <div className="flexColCenter stat">
              <span>
                <CountUp start={400} end={500} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText jir">Designs</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={60} end={100} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText jir">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={80} duration={3} />
                <span>+</span>
              </span>
              <span className="secondaryText jir">Completed Projects</span>
            </div>
          </div>
        </div>
        {/* rightside */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="image-container"
          >
            <img src="./hero-image.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
