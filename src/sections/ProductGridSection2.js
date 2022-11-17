// Products for half of the page for desktop view.

import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection2 = ({title, items = []}) => {
  return (
    <section className="product-grid2">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-0 m-0 p-0">
                {
                  items.map( product => <ProductCard key={product.articleNumber} item={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection2