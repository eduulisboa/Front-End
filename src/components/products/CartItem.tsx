import React from 'react'
import { Product } from '../../types/type'

type Prop = {
    item: Product
}

export default function CartItem({item}:Prop) {
  return (
    <div>
        <div><img src={item.images[0]} alt={item.title} height="400" width="300"/></div>
        <div>{item.title}</div>
        <div>${item.price} </div>
    </div>
  )
}