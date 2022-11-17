// Contacts page with map

import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MapSection from '../sections/MapSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'

const ContactsPage = () => {
    // window.top.document.title = 'Contacts - Fixxo.'

  return (
    <>
    <MainMenuSection/>
    <BreadcrumbSection currentPage="Contacts"/>
    <div className="map">
        <MapSection/>
    </div>
    <ContactFormSection />
    <FooterSection/>
    </>
  )
}

export default ContactsPage