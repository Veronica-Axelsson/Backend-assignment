import React, { useEffect } from 'react'
import { ProductManageContext, IProductContext } from '../ManageProducts/ProductContextManage'
import { ProductItem } from '../models/ProductModel'



const ProductDetails: React.FC = ({}) => {
  const {product, get, remove} = React.useContext(ProductManageContext) as IProductContext

  // useEffect (() => {
  //   get(1)
      
  // }, [])
  
  return (
    <section className='product-details'>
        <div className='container'>
            <div>
                <div>Product name: {product.name}</div>
                <div className='cardBoxBG'></div>
                <img src={product.imageName} alt="product shot not working"/>
            </div>
        </div>
    </section>

  )
}

export default ProductDetails