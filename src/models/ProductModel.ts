export interface ProductItem {
    tag: string
    articleNumber: string
    description: string
    name: string
    category: string
    price: number
    rating: string
    imageName: string
  }

  export interface  Product {
    tag: string | number | readonly string[] | undefined
    articleNumber: string
    name: string
    description: string
    category: string
    price: string
    rating: string
    imageName : string
}

export interface  ProductRequest {
    tag: string | number | readonly string[] | undefined
    // id: number
    name: string
    description: string
    category: string
    price: string
    rating: string
    imageName : string
}
