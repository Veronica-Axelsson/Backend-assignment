// Products details page

import React, { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import { useProductContext } from '../contexts/ProductContext'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'

const ProductDetailsPage: React.FC = () => {
//   window.top.document.title = 'Products - Fixxo.'
  const {id} = useParams()
  const {product, getProduct} = useProductContext()
  
  useEffect(() => {
    getProduct(id)
  }, [id, getProduct])
    

  return (
    <>
    <MainMenuSection/>
    <BreadcrumbSection parentPage='Products' currentPage={product.name} />
    <ProductDetails  item={product} />
    <FooterSection/>
  </>
  )
}

export default ProductDetailsPage