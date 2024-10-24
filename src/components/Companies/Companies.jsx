import React, { useState } from "react";
import Popup from "../Popup/Popup"; // Ensure the path is correct
import "./Companies.css";

const Companies = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  const handleImageClick = (content) => {
    setPopupContent(content);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const content1 = (
    <>
      <h2>Solid Real Estate</h2>
      <p>
        Solid Real Estate is dedicated to helping you navigate the complexities
        of the real estate market with confidence. Specializing in plot sales,
        we offer a diverse range of properties tailored to meet the needs of
        families, investors, and developers alike.
      </p>
      <p>
        With a deep understanding of local market trends and a commitment to
        transparency, we empower our clients to make informed decisions.
      </p>
    </>
  );

  const content2 = (

        <>
      <h2>Welcome to Solid's Terra Travels</h2>
      <p>
        At Solid's Terra travels, we specialize in making your travel dreams a
        reality. Whether you're planning a getaway or a casual trip, we provide
        seamless assistance for all your travel needs.
      </p>
      <h3>Our Services Include:</h3>
      <ul>
        <li>
          Flight Ticket Booking: We offer competitive rates and a wide selection
          of airlines to ensure you find the perfect flight that suits your
          schedule and budget.
        </li>
        <li>
          GCC Visa Assistance: Our experts provide comprehensive visa services,
          guiding you through the application process and ensuring you have all
          the necessary documentation for a hassle-free experience.
        </li>
        <li>
          Passport Services: We simplify the passport application process for
          you, providing assistance every step of the way to ensure you have
          your travel documents ready in no time.
        </li>
      </ul>
    </>
  );

  return (
    <div>
      <h1 className="title">Our Solid Ventures</h1>
      <div className="img-container">
        <img
          src="./prologis.png"
          alt="Prologis"
          className="imge"
          onClick={() => handleImageClick(content1)}
        />
        <img
          src="./equinix.png"
          alt="Equinix"
          className="imge"
          onClick={() => handleImageClick(content2)}
        />
        <Popup isOpen={isOpen} content={popupContent} onClose={closePopup} />
      </div>
    </div>
  );
};

export default Companies;
