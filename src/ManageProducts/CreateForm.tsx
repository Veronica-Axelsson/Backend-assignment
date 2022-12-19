import React from 'react'
import { IProductContext, ProductManageContext  } from '../ManageProducts/ProductContextManage'

const CreateForm: React.FC = () => {
    const {productRequest, setProductRequest, create} = React.useContext(ProductManageContext) as IProductContext


  return (
    <div className='createProductForm'> 
        <form onSubmit={create} className='adjust d-grid mb-5'>
          <h3 className='display-6 mb-4'>Create product</h3>
          <input value={productRequest.tag} onChange={(e) => setProductRequest ({...productRequest, tag: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter you product tag...' />
          <input value={productRequest.name} onChange={(e) => setProductRequest ({...productRequest, name: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter you product name...' />
          <input value={productRequest.description} onChange={(e) => setProductRequest ({...productRequest, description: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter product description...' />
          <input value={productRequest.category} onChange={(e) => setProductRequest ({...productRequest, category: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter prodct category...' />
          <input value={productRequest.price} onChange={(e) => setProductRequest ({...productRequest, price: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter products price...' />
          <input value={productRequest.rating} onChange={(e) => setProductRequest ({...productRequest, rating: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter products rating, max 5...' />
          <input value={productRequest.imageName} onChange={(e) => setProductRequest ({...productRequest, imageName: e.target.value})} type="text" className='form-control py-2 mb-3' placeholder='Enter products image URL adress.' />

          <button type='submit' className='btn btn-success py-2 mt-3'>Create product</button>
        </form>
    </div>

  )
}

export default CreateForm