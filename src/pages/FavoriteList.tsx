import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

export default function FavoriteList() {

  const favoriteList = useSelector((state:RootState) => state.products.favorites)

  return (
    <div>{favoriteList.map((item) => item.title)}</div>
  )
}
