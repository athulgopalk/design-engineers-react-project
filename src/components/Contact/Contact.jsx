import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
// import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section className="c-wrapper" id="C1">
      <div className="paddings innerWidth flexCenter c-container">
        {/* leftside */}
        <div className="flexColStart c-left">
          <span className="orangeText">Connect with Us</span>
          <span className="primaryText">Get in Touch Easily</span>
          <span className="secondaryText">
            Our expert team is ready to assist with your home design needs.{" "}
            <br />
            Whether you're planning a new project or need support, we're here to
            help. Contact us for personalized guidance and start your design
            journey today.
          </span>

          {/* contact 4 section */}
          {/* section1 */}

          <div className="flexStart contactModes row">
            {/* firstrow */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText"></span>
                  </div>
                </div>
                <a href="tel:+916282613612" className="flexCenter button">
                  Call Now
                </a>
              </div>
            </div>

            {/* section2 */}

            {/* firstrow */}
            <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText"></span>
                  </div>
                </div>
                <a
                  href="https://wa.me/6282613612"
                  className="flexCenter button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat Now
                </a>
              </div>
            </div>
          </div>

          {/* section3 */}

          <div className="flexStart contactModes row">
            {/* firstrow */}
            {/* <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">8225 2255 2225</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
            </div> */}

            {/* section4 */}

            {/* firstrow */}
            {/* <div className="flexColStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">8225 2255 2225</span>
                  </div>
                </div>
                <div className="flexCenter button"> Chat Now</div>
              </div>
            </div> */}
          </div>
        </div>

        {/* rightside */}

        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
