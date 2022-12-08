import React from 'react'
import { ProductItem } from '../models/ProductModel'

interface ProductDetailsType {
  item: ProductItem
}

const ProductDetails: React.FC<ProductDetailsType> = ({item}) => {
  return (
    <section className='product-details'>
        <div className='container'>
            <div>
                <div>Product name: {item.name}</div>
                <div className='cardBoxBG'></div>
                <img src={item.imageName} alt="product shot not working"/>
            </div>
        </div>
    </section>

  )
}

export default ProductDetails