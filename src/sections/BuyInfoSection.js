// Buying information section

import React from 'react'
import divider from '../assets/images/icons/divider.svg'
import icon1 from '../assets/images/icons/shopInfoIcons1.svg'
import icon2 from '../assets/images/icons/shopInfoIcons2.svg'
import icon3 from '../assets/images/icons/shopInfoIcons3.svg'

const BuyInfoSection = () => {
  return (
    <>
      <section className="buyInfoSection">
        <img src={divider} className="divider" alt="showcase-img-1"/>
        <div className="container ">
          {/* Buy info - Customer Support ------------------------------*/}
          <div className="buyInfo">
            <div className="circle">
              <img src={icon1} alt="showcase-img-1"/>
            </div>
            <h3>Customer Support</h3>
            <p>Village did removed enjoyed explain talking.</p>
          </div>
          {/* Buy info - Secured Payment -------------------------------*/}
          <div className="buyInfo __marginL">
            <div className="circle">
              <img src={icon2} alt="showcase-img-1"/>
            </div>
            <h3>Secured Payment</h3>
            <p>Village did removed enjoyed explain talking.</p>
          </div>
        
          {/* Buy info - Free Home Delivery ----------------------------*/}
          <div className="buyInfo __marginR">
            <div className="circle">
              <img src={icon3} alt="showcase-img-1"/>
            </div>
            <h3>Free Home Delivery</h3>
            <p>Village did removed enjoyed explain talking.</p>
          </div>

          {/* Buy info - 30 Day Returns -------------------------------*/}
          <div className="buyInfo">
            <div className="circle">
              <img src={icon3} alt="showcase-img-1"/>
            </div>
            <h3>30 Day Returns</h3>
            <p>Village did removed enjoyed explain talking.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BuyInfoSection