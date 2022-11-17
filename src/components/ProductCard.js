// Product card

import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({item}) => {

    const addToWishList = (e) => {
    }

    const addToCompare = (e) => {
    }

    const addToCart = (e) => {
    }

  return (
        <div className="col ">
            <div className="card ">
                <div className="card-img">

                    {/* Card product image --------------------------------------------------------------------------------------------*/}
                    <img src={item.imageName} alt={item.name} />
                    <div className="d-xl-none card-menu ">
                        
                    {/* Mini menu on product images -----------------------------------------------------------------------------------*/}
                        <button onClick={addToWishList} className="menu-link"><i className="fa-regular fa-heart"></i></button>
                        <button onClick={addToCompare} className="menu-link"><i className="fa-regular fa-repeat"></i></button>
                        <button onClick={addToCart} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                    </div>

                    {/* Quick view button on product image ----------------------------------------------------------------------------*/}
                    <NavLink to={`/products/${item.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme btn-card-theme d-xl-none">
                        <div className="corner-left"></div>
                        <div className="corner-right"></div>
                        QUICK VIEW
                    </NavLink>
                </div>

                {/* Text and stars under product image --------------------------------------------------------------------------------*/}
                <div className="card-body ">
                    <p className="card-category">{item.category}</p>
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-rating">
                        <i className="__star fa-sharp fa-solid fa-star"></i>
                        <i className="__star fa-sharp fa-solid fa-star"></i>
                        <i className="__star fa-sharp fa-solid fa-star"></i>
                        <i className="__star fa-sharp fa-solid fa-star"></i>
                        <i className="__star fa-sharp fa-solid fa-star"></i>
                    </p>
                    <p className="card-price">${item.price}</p>
                </div>
            </div>
        </div>
  )
}

export default ProductCard