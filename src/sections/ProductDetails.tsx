import { get } from 'http'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext, ProductContextType } from '../contexts/ProductContext'
import { ProductManageContext, IProductContext } from '../ManageProducts/ProductContextManage'
import { ProductItem } from '../models/ProductModel'

interface ProductDetailsType {
articleNumber: string
}

const ProductDetails: React.FC<ProductDetailsType> = ({articleNumber}) => {
  const {product, getProduct} = useProductContext() as ProductContextType
  

  useEffect(() => {
    getProduct()
  }, [getProduct])


  // const { articleNumber } = useParams()

  // useEffect (() => {
  //   if( articleNumber) {
  //     get(articleNumber)
  //   }
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