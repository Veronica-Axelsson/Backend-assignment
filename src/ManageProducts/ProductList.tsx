import React, { useEffect } from 'react'
import { IProductContext, ProductManageContext } from '../ManageProducts/ProductContextManage'
import { Product } from '../models/ProductModel'
import { NavLink } from 'react-router-dom'

interface ProductListType {
  item: string

  tag:string
  name:string
  description:string
  category:string
  price: number
  rating:number
  imageName:string
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
            products.map((product: Product) => (<div onClick={() => remove(product.id)} key={product.id} className='mb-3'>Tag: {product.tag} <br /> Products name: {product.name} <br /> Description:{product.description}  <br />Category: {product.category} <br /> Price: {product.price}<br /> Rating: {product.rating} <br />Image url adress: {product.imageName}</div>))
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