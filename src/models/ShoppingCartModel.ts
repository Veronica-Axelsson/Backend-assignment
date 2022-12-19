import { ProductItem } from '../models/ProductModel'

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}