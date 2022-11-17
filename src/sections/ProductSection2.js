// 4 products and big image for home view.

import React, { useContext }  from 'react'
import {Link} from 'react-router-dom'
import Models8 from '../assets/images/Models/Models8.png'
import ProductGridSection2 from './ProductGridSection2'
import { ProductSection1Context } from '../contexts/contexts'

const ProductSection2 = () => {

  const products = useContext(ProductSection1Context);

  return (
    <section className="productSection2">
      <div className="container">
        <div className="desktop">
          <div className="divide2">
            
            {/* Left side - Products ---------------------------------------------------------*/}
            <div className='fullwidth'>
              <div className="colWidth">
                <div className="productsSize">
                  <ProductGridSection2 items={products} />
                </div>
              </div>
            </div>

            {/* Right side - Big image --------------------------------------------------------*/}
            <div className="textOnImg ">
              <img className="imgSize" src={Models8} alt="" />

              <div className="centering">
                <h2>2 FOR USD $49</h2>
                <div className="__button">
                  <div className="button-white">
                    <div className="corner-top-left"></div>
                    <Link to="/products" className="button-text">FLASE SALE</Link>
                    <div className="corner-bottom-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection2