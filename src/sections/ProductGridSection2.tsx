// Products for half of the page for desktop view.

import React from 'react'
import ProductCard from '../components/ProductCard'
import { ProductItem } from '../models/ProductModel'

interface ProductGridSection2Type {
  title: string
  items: ProductItem[]
}

const ProductGridSection2: React.FC<ProductGridSection2Type> = ({title, items = []}) => {
  return (
    <section className="product-grid2">
        <div className="container">
            <h1>{title}</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                {
                  items.map( product => <ProductCard key={product.articleNumber} item={product} />)
                }
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection2