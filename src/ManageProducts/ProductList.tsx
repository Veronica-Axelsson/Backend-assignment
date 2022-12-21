import React, { useEffect } from 'react'
import { IProductContext, ProductManageContext } from '../ManageProducts/ProductContextManage'
import { Product } from '../models/ProductModel'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import UpdateForm from './UpdateForms'
import { NavLink } from 'react-router-dom'

interface ProductListType {


  tag:string
  name:string
  description:string
  category:string
  price: number
  rating:number
  imageName:string
}


const ProductList: React.FC<ProductListType> = () => {
    // const navigate = useNavigate()
    const {products, getAll, remove} = React.useContext(ProductManageContext) as IProductContext

    useEffect (() => {
        getAll()
        
    }, [getAll])

  // const navigateUpdateForms = () => {
  //   navigate(`/updateforms`)
  // }

  return (
    <>
    <div className='listCard'>
    <h3 className='display-6 mb-4'>List of products</h3>
      <div className='container'>
          {
            products.map((product: Product) => (
              <div key={product.articleNumber} className='listCard-card mb-3'>
                <img src={product.imageName} alt={product.name} />
                <div className='adjustContent'>
                  Tag: {product.tag} <br /> 
                  Products name: {product.name} <br /> 
                  Description:{product.description}  <br />
                  Category: {product.category} <br /> 
                  Price: {product.price}<br /> 
                  Rating: {product.rating} <br />
                </div>
                  <NavLink to={`/updateforms/${product.articleNumber}`}>
                    <button className="btn-theme ">Update</button>
                  </NavLink>
                  <button onClick={() => remove(product.articleNumber)} className="btn-theme">Delete</button>
              </div>))
          }
      </div>
    </div> 
    </>
  )
}

export default ProductList