import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IProductContext, ProductManageContext  } from '../ManageProducts/ProductContextManage'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const UpdateForm = () => {
  const navigate = useNavigate()
  const {product, setProduct, update, get} = React.useContext(ProductManageContext) as IProductContext
  const { articleNumber } = useParams()

  useEffect(() => {
    if( articleNumber) {
      get(articleNumber)
    }
  }, [])
  

    const navigateManageProductsPage = () => {
      navigate('/manageproductspage')
    }

  return (
    <>
    <MainMenuSection />
    <BreadcrumbSection currentPage="ManageProductsPage" />
    <div className='UpdateForm'>
      <div className='container'>
        <form onSubmit={update} className='d-grid mb-5'>
          <h3 className='display-6 mb-4'>Update product</h3>
          <input value={product.tag} onChange={(e) => setProduct ({...product, tag: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter you product tag...' />
          <input value={product.name} onChange={(e) => setProduct ({...product, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter you product name...' />
          <input value={product.description} onChange={(e) => setProduct ({...product, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter product description...' />
          <input value={product.category} onChange={(e) => setProduct ({...product, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter prodct category...' />
          <input value={product.price} onChange={(e) => setProduct ({...product, price: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter products price...' />
          <input value={product.rating} onChange={(e) => setProduct ({...product, rating: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter products rating, max 5...' />
          <input value={product.imageName} onChange={(e) => setProduct ({...product, imageName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter products image URL adress.' />

          <button type='submit' className='btn btn-success py-2 mt-3'>Update product</button>
        </form>

      <button  onClick={navigateManageProductsPage} className="btn-theme">Back to manage page</button>
      </div>
    </div>





    <FooterSection />
    </>
  )
}

export default UpdateForm