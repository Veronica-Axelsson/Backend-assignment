// product page

import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext} from '../contexts/ProductContext'


const ProductsPage: React.FC = () => {
  const {products, getProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <>
      <MainMenuSection />
      <BreadcrumbSection currentPage="Products"/>
      <div className="mt-4 pt-2">
        <ProductGridSection  title="Products" items={products} />
      </div>
      <FooterSection />
    </>
  )
}

export default ProductsPage

//  <BreadcrumbSection currentPage="Products"/>
