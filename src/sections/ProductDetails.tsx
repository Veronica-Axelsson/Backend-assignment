import React, { useEffect } from 'react'
import { ProductManageContext, IProductContext } from '../ManageProducts/ProductContextManage'
import { ProductItem } from '../models/ProductModel'

interface ProductDetailsType {
  articleNumber: ProductItem

  tag:string
  name:string
  description:string
  category:string
  price: number
  rating:number
  imageName:string
}

const ProductDetails: React.FC<ProductDetailsType> = ({articleNumber}) => {
  const {product, get, remove} = React.useContext(ProductManageContext) as IProductContext

  useEffect (() => {
    get(1)
      
  }, [])
  
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