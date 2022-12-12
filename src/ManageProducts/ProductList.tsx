import React, { useEffect } from 'react'
import { IProductContext, ProductManageContext } from '../ManageProducts/ProductContextManage'
import { Product } from '../models/ProductModel'
import { NavLink } from 'react-router-dom'

interface ProductListType {
  item: string
  name:string
}


const ProductList: React.FC<ProductListType> = ({item}) => {
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
        {/* <NavLink to={`/UpdateForms`} className="btn-theme btn-card-theme d-xl-none">
            <div className="corner-left"></div>
            <div className="corner-right"></div>
            QUICK VIEW
        </NavLink> */}
    </>
  )
}

export default ProductList