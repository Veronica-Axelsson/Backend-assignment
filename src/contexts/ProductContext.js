import { useContext, useState } from 'react';
import { createContext} from 'react'

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({children}) => {
    const url = 'https://win22-webapi.azurewebsites.net/api/products'
    const [product, setProduct] = useState({})
    const [products, setProducts] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])


    const getProducts = async () => {
        const res = await fetch(url)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take = 0) => {
        const res = await fetch(url + `?take=${take}`)
        setFeaturedProducts(await res.json())
    }

    const getProduct = async (articleNumber) => {
        const res = await fetch(url + `/${articleNumber}`)
        setProducts(await res.json())
    }

  return (
    <ProductContext.Provider value={{product, products, featuredProducts, getProducts,  getFeaturedProducts, getProduct}}>
        {children}
    </ProductContext.Provider>
  )
}
