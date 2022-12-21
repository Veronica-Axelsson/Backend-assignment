// Product card

import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useProductContext, ProductContextType } from '../contexts/ProductContext'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ProductItem } from '../models/ProductModel'
import { currencyFormater } from '../utilities/currencyFormatter'

interface ProductCardType {
    item: ProductItem
  }

const ProductCard: React.FC<ProductCardType> = ({item}) => {
    const { incrementQuantity } = useShoppingCartContext() as ShoppingCartContextType

    const {product, getProduct} = useProductContext() as ProductContextType

    useEffect(() => {
      getProduct()
    }, [])
    

  return (
        <div className="col ">
            <div className="card ">
                <div className="card-img">

                    {/* Card product image --------------------------------------------------------------------------------------------*/}
                    <img src={item.imageName} alt={item.name} />
                    <div className="d-xl-none card-menu ">
                        
                    {/* Mini menu on product images -----------------------------------------------------------------------------------*/}
                        <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                        <button className="menu-link"><i className="fa-regular fa-repeat"></i></button>
                        <button onClick={() => incrementQuantity({articleNumber: item.articleNumber, product: item, quantity: 0})} className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                    </div>

                    {/* Quick view button on product image ----------------------------------------------------------------------------*/}
                    <NavLink to={`/productdetailspage/${item.articleNumber}`} className="btn-theme btn-card-theme d-xl-none">
                        <div className="corner-left"></div>
                        <div className="corner-right"></div>
                        QUICK VIEW
                    </NavLink>
                    

{/* ${item.articleNumber.toLowerCase().replace(/ /gi, "-")}` */}

                    {/* <NavLink to={`/updateforms/${product.articleNumber}`}>
                    <button className="btn-theme ">Update</button>
                  </NavLink> */}


                  
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
                    <p className="card-price">{currencyFormater(item.price)}</p>
                    
                </div>
            </div>
        </div>
  )
}

export default ProductCard