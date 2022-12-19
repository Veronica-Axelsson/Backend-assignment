// Products details page

import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
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

const ProductDetailsPage: React.FC<ProductDetailsType> = () => {
  const {id} = useParams<string>()
  const ProductContext = useProductContext() as ProductContextType
  const {product, get, remove} = React.useContext(ProductManageContext) as IProductContext

  // useEffect (() => {
  //   get(1)
      
  // }, [])
  
  useEffect(() => {
    ProductContext.getProduct(id)
  }, [ProductContext, id])
    

  return (
    <>
    <MainMenuSection/>
    <BreadcrumbSection parentPage='Products' currentPage={ProductContext.product.name} />


    <section className='product-details'>
        <div className='container'>
            <div>
                <div>Product name: {product.name}</div>
                <div className='cardBoxBG'></div>
                <img src={product.imageName} alt="product shot not working"/>
            </div>
        </div>
    </section>


    <FooterSection/>
  </>
  )
}

export default ProductDetailsPage