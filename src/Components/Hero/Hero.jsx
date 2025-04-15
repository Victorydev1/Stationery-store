import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <h2>Quality Stationery</h2>
          <div>
                <div className="hero-hand-icon"> 
                    <p>From notebooks to pens</p> 
                    </div>
                  <p>Notebooks, pens </p>
                  <p>office supplies & more</p>
          </div>
          <div className="hero-latest-btn">
            <div>Shop Now</div>
              <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right"></div>
        <img src={hero_image} alt="" />
     </div> 
    </>
  )
}

export default Hero