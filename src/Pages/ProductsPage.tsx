// product page

import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductGridSection from '../sections/ProductGridSection'
import FooterSection from '../sections/FooterSection'
import {ProductContext} from '../contexts/contexts'

const ProductsPage = () => {
//   window.top.document.title = 'Products - Fixxo.'

  const products = useContext(ProductContext);

  return (
    <>
      <MainMenuSection/>
      <BreadcrumbSection currentPage="Products"/>
      <div className="mt-4 pt-2">
        <ProductGridSection  title="Products" items={products} />
      </div>
      <FooterSection/>
    </>
  )
}

export default ProductsPage
