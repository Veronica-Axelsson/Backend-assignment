// Hero section

import React from 'react'
import {Link} from 'react-router-dom'
import Hero1 from '../assets/images/Hero/hero1.png'
import Hero2 from '../assets/images/Hero/hero2.png'

const hero = () => {
  return (
    <section className="hero container">

        {/* Left image --------------------------------------------------------------*/}
        <img src={Hero1} className="heroImg1" alt="showcase-img-1"/>

        {/* Middle Text and button --------------------------------------------------*/}
        <div className="heroBody ">
            <h2>SALE UP</h2>
            <h2>To 50% Off</h2>
            <p>Online shopping free home delivery over $100</p>
            <div className="__button">
                <div className="button-pink">
                    <div className="corner-top-left"></div>
                    <Link to="/products" className="button-text">SHOP NOW</Link>
                    <div className="corner-bottom-right"></div>
                </div>
            </div>
        </div>
        
        {/* Right image ---------------------------------------------------------------*/}
        <img src={Hero2} className="heroImg2" alt="showcase-img-1"/>        
    </section>
  )
}

export default hero





