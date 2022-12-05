// Categories page

import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'


const CategoriesPage: React.FC = () => {

  return (
    <>
      <MainMenuSection/>
      <BreadcrumbSection currentPage="Categories"/>
      <FooterSection/>
    </>
  )
}

export default CategoriesPage