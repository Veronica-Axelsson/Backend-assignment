import React, { useEffect } from 'react'
import { IProductContext, ProductManageContext } from '../ManageProducts/ProductContextManage'
import { Product } from '../models/ProductModel'

const ProductList = () => {
    const {products, getAll, remove} = React.useContext(ProductManageContext) as IProductContext

    useEffect (() => {
        getAll()
        
    }, [getAll])


  return (
    <>
    <h3 className='display-6 mb-4'>List of products</h3>
        {
            products.map((product: Product) => (<div onClick={() => remove(product.id)} key={product.id} className='mb-3'> {product.title} {product.description} {product.category} {product.price} {product.rating} </div>))
        }
    </>
  )
}

export default ProductList