// Products details page

import React, { useEffect} from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductManageContext, IProductContext } from '../ManageProducts/ProductContextManage'
import { useParams } from 'react-router-dom'

interface ProductDetailsType {
  articleNumber: string

  tag:string
  name:string
  description:string
  category:string
  price: number
  rating:number
  imageName:string
}

const ProductDetailsPage2: React.FC<ProductDetailsType> = () => {

  const {product, getProduct} = React.useContext(ProductManageContext) as IProductContext
 
  const { articleNumber } = useParams()

useEffect(() => {
  if(articleNumber) {
    getProduct(articleNumber)
  }
}, [])
  

  return (
    <>
    <MainMenuSection/>
    <BreadcrumbSection currentPage='Product details' />


    <section className='product-detailsPage'>
      <div className='container'>
        <div className='listCard-card '>
          <img src={product.imageName} alt={product.name} />
          <div>
            Tag: {product.tag} <br /> 
            Products name: {product.name} <br /> 
            Description:{product.description}  <br />
            Category: {product.category} <br /> 
            Price: {product.price}<br /> 
            Rating: {product.rating} <br />
          </div>
        </div>
      </div>
    </section>




    <FooterSection/>
  </>
  )
}

export default ProductDetailsPage2