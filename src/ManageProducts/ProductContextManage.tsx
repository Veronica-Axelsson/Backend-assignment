import React, {useState, useContext, createContext} from 'react'
import {Product, ProductRequest} from '../models/ProductModel'
import { ProductProviderProps } from '../models/ProductProviderProps'

export interface IProductContext {
    product: Product
    setProduct: React.Dispatch<React.SetStateAction<Product>>
    productRequest: ProductRequest
    setProductRequest: React.Dispatch<React.SetStateAction<ProductRequest>>
    products: Product[]
    create: (e: React.FormEvent) => void
    getProduct: (id:string) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: string) => void
}

export const ProductManageContext = createContext<IProductContext | null>(null)
export const useProductManageContext = () => { return useContext(ProductManageContext)}

const ProductManageProvider = ({children} : ProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: Product = {
        articleNumber: '', tag: '', name: '', description: '', category: '', price: '', rating: '', imageName: '',
        get: function (id: string | undefined): unknown {
            throw new Error('Function not implemented.')
        }
    }
    const productRequest_default: ProductRequest = {tag: '', name: '', description: '', category: '', price:'', rating: '', imageName: ''}

    const [product, setProduct] = useState<Product>(product_default)
    const [productRequest, setProductRequest] = useState<ProductRequest>(productRequest_default)
    const [products, setProducts] = useState<Product[]>([])

    const create = async (e: React.FormEvent) => {
        e.preventDefault()    

        const result = await fetch(`${baseUrl}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productRequest)
        })

        if (result.status === 201) {
            setProductRequest(productRequest_default)
        } else {
            console.log('error')
        }
    }

    const getProduct = async (articleNumber:string) => {
        const result = await fetch(`${baseUrl}/product/details/${articleNumber}`)
        if ( result.status === 200) {
            const data = await result.json()
            // console.log(data)

            setProduct(data)
        }
    }

    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if ( result.status === 200)
            setProducts(await result.json())
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault() 
        
        const result = await fetch(`${baseUrl}/${product.articleNumber}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
     
        if (result.status === 201) 
            setProduct(await result.json())  

            console.log("det gick")
          
    }

    const remove = async (articleNumber: string) => {
        const result = await fetch(`${baseUrl}/${articleNumber}`, {
            method: 'delete' 
        })

        if (result.status === 204) 
            setProduct(product_default)
            console.log("Det gick inte")
    }


  return (
    <ProductManageContext.Provider value={{product, setProduct, productRequest, setProductRequest, products, create, getProduct, getAll, update, remove}}>
        {children}
    </ProductManageContext.Provider>
  )
}

export default ProductManageProvider