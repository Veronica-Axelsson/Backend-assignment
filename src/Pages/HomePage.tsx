// Home page

import React, { useContext } from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import Hero from '../sections/Hero'
import ProductGridSection from '../sections/ProductGridSection'
import TopicsSection from '../sections/TopicsSection'
import ProductSection1 from '../sections/ProductSection1'
import ProductSection2 from '../sections/ProductSection2'
import BuyInfoSection from '../sections/BuyInfoSection'
import { FeaturedProductsContext } from '../contexts/contexts'
import FooterSection from '../sections/FooterSection'

const HomePage: React.FC = () => {
//   window.top.document.title = 'Fixxo.'

  const products = useContext(FeaturedProductsContext);

  return (
    <>
    <header className='headerBG'>
      <MainMenuSection/>
      <Hero/>
    </header>
    <ProductGridSection title="Featured Products" items={products} />
    <TopicsSection />
    <ProductSection1 />
    <ProductSection2 />
    <BuyInfoSection />
    <FooterSection/>
    </>
  )
}

export default HomePage