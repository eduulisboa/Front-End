import React from 'react'

import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export default function CartList() {

  const cartList = useSelector((state:RootState) => state.products.cart)

  return (
    <div>{cartList.map((item)=> item.title)}</div>
  )
}
