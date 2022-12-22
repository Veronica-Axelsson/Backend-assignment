import React, { useEffect } from 'react'
import { useProductContext, ProductContextType } from '../contexts/ProductContext'

interface ProductDetailsType {
articleNumber: string
}

const ProductDetails: React.FC<ProductDetailsType> = ({articleNumber}) => {
  const {product, getProduct} = useProductContext() as ProductContextType
  

  useEffect(() => {
    getProduct()
  }, [getProduct])
  
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