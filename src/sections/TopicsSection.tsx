// Two image/text boxes for home view.

import React from 'react'
import {Link} from 'react-router-dom'
import Models5 from '../assets/images/Models/Models5.png'
import Models6 from '../assets/images/Models/Models6.png'

const TopicsSection = () => {
  return (
    <section className="topicsSection">
        <div className="container">
            <div className="TopicsBoxes .__1fr">

                {/* Left Box -------------------------------------------------------------- */}
                <div className='boxLeft'>
                    <img className="ImgLeft" src={Models5} alt="showcase-img-1"/>
                    <div className="textButton">
                        <h2>Pamela Reif's</h2>
                        <h2>Top Picks</h2>
                        <div className="__button">
                            <div className="button-black">
                                <div className="corner-top-left"></div>
                                <Link to="/products" className="button-text">SHOP NOW</Link>
                                <div className="corner-bottom-right"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Box ------------------------------------------------------------- */}
                <div className='boxRight .__1fr'>
                    <div className="textButton">
                        <h2>Let's Be</h2>
                        <h2>Conscious</h2>
                        <div className="__button">
                            <div className="button-white">
                                <div className="corner-top-left"></div>
                                <Link to="/products" className="button-text">FLASE SALE</Link>
                                <div className="corner-bottom-right"></div>
                            </div>
                        </div>
                    </div>
                <img className="ImgRight" src={Models6} alt="showcase-img-1"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopicsSection