import React from 'react'
import CreateForm from '../ManageProducts/CreateForm'
import ProductList from '../ManageProducts/ProductList'
import UpdateForm from '../ManageProducts/UpdateForms'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'



const ManageProductsPage: React.FC = () => {

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="ManageProductsPage" />
    
    <CreateForm />
    <ProductList item={''} name={''} />
    {/* <UpdateForm /> */}

    <FooterSection />
    </>

  )
}

export default ManageProductsPage


