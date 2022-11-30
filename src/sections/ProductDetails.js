import React from 'react'

const ProductDetails = ({item}) => {
  return (
    <section className='product-details'>
        <div className='container'>
            <div>
                <div>{item.name}</div>
                <img src={item.imageName} alt="product shot"/>
            </div>
        </div>
    </section>

  )
}

export default ProductDetails