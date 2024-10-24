import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Team.css";
import data from "../../utils/slider2.json";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  return (
    <section className="t-wrapper" id="R1">
      <div className="paddings innerWidth t-container">
        {/* headtitle */}
        <div className="t-head flexColStart">
          <span className="orangeText ">
            Meet the Visionaries Behind Our Success
          </span>
          <span className="primaryText team-desc">
            Behind every great design is a great team.<br></br> Meet the experts
            turning vision into reality at Solid Home Design and Engineers.
          </span>
        </div>
        {/* swiper */}
        <Swiper {...sliderSettings}>
          <SliderButtons />

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart t-card ">
                <img src={card.images} alt="" />
                <span className="secondaryText t-pos-con ">
                  <span className="secondaryText team-pos">{card.position}</span>
                </span>
                <span className="secondaryText team-detail">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

// slidebutton
const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className=" flexCenter t-buttons">
      <button onClick={() => swiper.slidePrev()}> &lt; </button>
      <button onClick={() => swiper.slideNext()}> &gt; </button>
    </div>
  );
};
