import { ProductItem } from '../models/ProductModel'

export interface CartItem {
    articleNumber: string
    product: ProductItem
    quantity: number
}

// [
//     {
//         "articleNumber": "123123"
//         "quantity": 1
//         "product": {
//             "articleNumber": 123123,
//             "name": "Product 1",
//             "category": "Fashion",
//             "price": 49,
//             "rating": 4,
//             "imageName": "ghgfhgfhfghgfjhfhf"
//         }
//     },
//     {
//         "articleNumber": "123123"
//         "quantity": 1
//         "product": {
//             "articleNumber": 123123,
//             "name": "Product 1",
//             "category": "Fashion",
//             "price": 49,
//             "rating": 4,
//             "imageName": "ghgfhgfhfghgfjhfhf"
//         }
//     }
// ]