import React from 'react'
import { ShoppingCartContextType, useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { CartItem } from '../models/ShoppingCartModel'
import { currencyFormater } from '../utilities/currencyFormatter'

interface ShoppingCartItemType {
  item: CartItem
}

const ShoppingCartItem: React.FC<ShoppingCartItemType> = ({item}) => {
  const {incrementQuantity, decrementQuantity, removeItem} = useShoppingCartContext() as ShoppingCartContextType

  return (
    <div className='shoppingcart-item'>
      <div className='item-image'>
        <img src={item.product.imageName} alt={item.product.name}/>
      </div>
      <div className='item-info'>
        <div className='item-info-name'>{item.product.name}</div>
        <div className='item-info-quantity-box'>
          <button className='box-button-left' onClick={() => incrementQuantity(item)}>+</button>
          <span>{item.quantity}</span>
          <button className='box-button-right' onClick={() => decrementQuantity(item)}>-</button>
        </div>
      </div>
      <div className='item-price'>
        <div>{currencyFormater(item.product.price * item.quantity)}</div>
        <button onClick={() => removeItem(item.articleNumber)}><span><i className='fa-solid fa-trash'></i></span></button>
      </div>

    </div>
  )
}

export default ShoppingCartItem