import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'



export default function ProductDetail() {

  const productDetail = useSelector((state:RootState) => state.products.product)

  if(!productDetail)
  return <div>no data</div>
  return (
    <div>
      <img src={productDetail.images[0]} alt={productDetail.title} />
      <div>{productDetail.title}</div>
      <div>${productDetail.price}</div>
      <div>{productDetail.description}</div>
    </div>
  )
}
