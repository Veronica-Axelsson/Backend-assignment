export interface ProductItem {
    articleNumber: string
    name: string
    category: string
    price: number
    rating: string
    imageName: string
  }

  // -------------------------------------------------------------------  Använda något av uppe eller nere
  export interface  Product {
    id: number
    title: string
    description: string
    category: string
    price: string
    rating: string
}

export interface  ProductRequest {
    // id: number
    title: string
    description: string
    category: string
    price: string
    rating: string
}
