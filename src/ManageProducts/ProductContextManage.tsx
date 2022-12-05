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
    get: (id:number) => void
    getAll: () => void
    update: (e: React.FormEvent) => void
    remove: (id: number) => void
}

export const ProductManageContext = createContext<IProductContext | null>(null)
export const useProductManageContext = () => { return useContext(ProductManageContext)}

const ProductManageProvider = ({children} : ProductProviderProps) => {
    const baseUrl = 'http://localhost:5000/api/products'
    const product_default: Product = { id: 0, title: '', description: '', category: '', price:'', rating:'' }
    const productRequest_default: ProductRequest = {title: '', description: '', category: '', price:'', rating: ''}


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

    const get = async (id:number) => {
        const result = await fetch(`${baseUrl}/${id}`)
        if ( result.status === 200)
            setProduct(await result.json())
    }

    const getAll = async () => {
        const result = await fetch(`${baseUrl}`)
        if ( result.status === 200)
            setProducts(await result.json())
    }

    const update = async (e: React.FormEvent) => {
        e.preventDefault()    

        const result = await fetch(`${baseUrl}/${product.id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })

        if (result.status === 200) 
            setProduct(await result.json())  
    }

    const remove = async (id: number) => {
        const result = await fetch(`${baseUrl}/${id}`, {
            method: 'delete' 
        })

        if (result.status === 204) 
            setProduct(product_default)
    }


  return (
    <ProductManageContext.Provider value={{product, setProduct, productRequest, setProductRequest, products, create, get, getAll, update, remove}}>
        {children}
    </ProductManageContext.Provider>
  )
}

export default ProductManageProvider