// Big image and 4 products for home view.

import React, { useContext }  from 'react'
import {Link} from 'react-router-dom'
import Models7 from '../assets/images/Models/Models7.png'
import ProductGridSection2 from '../sections/ProductGridSection2'
import { ProductSection1Context } from '../contexts/contexts'

const ProductSection1 = () => {

const products = useContext(ProductSection1Context);

  return (
    <section className="productSection1">
      <div className="container">
        <div className="divide2">
          {/* Left side - Big image --------------------------------------------------------*/}
          <div className="textOnImg ">
            <img className="imgSize" src={Models7} alt="" />
            <div className="centering">
              <h2>2 FOR USD $29</h2>
              <div className="__button">
                <div className="button-white">
                  <div className="corner-top-left"></div>
                  <Link to="/products" className="button-text">FLASE SALE</Link>
                  <div className="corner-bottom-right"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Products --------------------------------------------------------*/}
          <div className="productsSize">
            <ProductGridSection2 items={products} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection1
