// Home page

import React, { useEffect } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import Hero from '../sections/Hero'
import ProductGridSection from '../sections/ProductGridSection'
import TopicsSection from '../sections/TopicsSection'
import ProductSection1 from '../sections/ProductSection1'
import ProductSection2 from '../sections/ProductSection2'
import BuyInfoSection from '../sections/BuyInfoSection'
import FooterSection from '../sections/FooterSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const HomePage: React.FC = () => {

  const {featuredProducts, getFeaturedProducts} = useProductContext() as ProductContextType

  useEffect(() => {
    getFeaturedProducts(8)
  }, [])
  

  return (
    <>
    <header className='headerBG'>
      <MainMenuSection/>
      <Hero/>
    </header>
    <ProductGridSection title="Featured Products" items={featuredProducts} />
    <TopicsSection />
    <ProductSection1 />
    <ProductSection2 />
    <BuyInfoSection />
    <FooterSection/>
    </>
  )
}

export default HomePage