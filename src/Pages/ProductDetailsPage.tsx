// Products details page

import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsPage: React.FC = () => {
  const {id} = useParams<string>()
  const ProductContext = useProductContext() as ProductContextType
  
  useEffect(() => {
    ProductContext.getProduct(id)
  }, [ProductContext, id])
    

  return (
    <>
    <MainMenuSection/>
    <BreadcrumbSection parentPage='Products' currentPage={ProductContext.product.name} />
    {/* <ProductDetails  item={ProductContext.product} /> */}
    <FooterSection/>
  </>
  )
}

export default ProductDetailsPage