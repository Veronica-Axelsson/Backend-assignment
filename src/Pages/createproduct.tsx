// Search page

import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import FooterSection from '../sections/FooterSection'
import CreateForm from '../ManageProducts/CreateForm'
import ManageProductsPage from '../Pages/ManageProductsPage'

const Search: React.FC = () => {
  
  return (
    <>
      <MainMenuSection/>
      <CreateForm />
      <FooterSection/>
    </>
  )
}

export default Search