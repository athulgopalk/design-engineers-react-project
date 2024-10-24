import React from 'react'
import { Swiper,SwiperSlide,useSwiper } from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Residencies = () => {
  return (
    <section className="r-wrapper" id="R1"> 
      <div className="paddings innerWidth r-container">
        {/* headtitle */}
        <div className="r-head flexColStart">
          <span className="orangeText ">Top Designs</span>
          <span className="primaryText">
            The harmony of creativity and engineering.
          </span>
        </div>
        {/* swiper */}
        <Swiper {...sliderSettings}>
          <SliderButtons />

          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card ">
                <img src={card.image} alt="" />
                <span className="secondaryText r-price">
                  <span>{card.price}</span>
                </span>
                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Residencies

// slidebutton
const  SliderButtons= ()=>{
    const swiper = useSwiper();
     return(
        <div className=' flexCenter r-buttons'>
           <button onClick={()=> swiper.slidePrev()}>  &lt; </button>
           <button onClick={()=> swiper.slideNext()}> &gt; </button>
        </div>
     )
}
