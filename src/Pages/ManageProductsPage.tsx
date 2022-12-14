import React from 'react'
import CreateForm from '../ManageProducts/CreateForm'
import ProductList from '../ManageProducts/ProductList'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'



const ManageProductsPage: React.FC = () => {

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="ManageProductsPage" />
    
    <CreateForm />
    <ProductList tag={''} name={''} description={''} category={''} price={0} rating={0} imageName={''}  />
    

    <FooterSection />
    </>

  )
}

export default ManageProductsPage


