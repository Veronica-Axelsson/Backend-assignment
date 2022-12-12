import { useContext, useState } from 'react'
import { createContext} from 'react'
import { ProductItem } from '../models/ProductModel'

// const getData = async () => {
//     const result = await fetch('http://localhost:5000/api/products')
//     const data = await result.json()

//     console.log(data)
// }

// getData()


interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featuredProducts: ProductItem[]
    productSection1: ProductItem[]
    productSection2: ProductItem[]
    getProduct: (articleNumber?: string) => void
    getProducts: () => void
    getFeaturedProducts: (take?: number) => void
    getProductSection1: (take?: number) => void
    getProductSection2: (take?: number) => void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext) }


const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    // const baseUrl: string = 'https://win22-webapi.azurewebsites.net/api/products'
    const baseUrl: string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '', articleNumber: '', description: '', name: '', category: '', price: 0, rating: '', imageName: ''}

    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featuredProducts, setFeaturedProducts] = useState<ProductItem[]>([])
    const [productSection1, setProductSection1] = useState<ProductItem[]>([])
    const [productSection2, setProductSection2] = useState<ProductItem[]>([])
    

    const getProduct = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/product/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }


    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeaturedProducts = async (take: number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0)
            url +=  `/${take}`

            // console.log(setFeaturedProducts)


        const res = await fetch(url)
        setFeaturedProducts(await res.json())

        
    }

    const getProductSection1 = async (take: number = 0) => {
        let url = `${baseUrl}/product-section1`

        if (take !== 0) 
        url += `?take=${take}`

        const res = await fetch(url)
        setProductSection1(await res.json())
    }

    const getProductSection2 = async (take: number = 0) => {
        let url = `${baseUrl}/product-section2`

        if (take !== 0)
        url += `?take=${take}`

        const res = await fetch(url)
        setProductSection2(await res.json())
    }


  return (
    <ProductContext.Provider value={{product, products, featuredProducts, productSection1, productSection2, getProduct, getProducts,  getFeaturedProducts, getProductSection1, getProductSection2}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider


