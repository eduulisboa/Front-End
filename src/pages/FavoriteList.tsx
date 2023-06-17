import React from 'react'
import { useSelector } from 'react-redux'

import { Grid } from '@mui/material'

import { RootState } from '../redux/store'
import FavoriteItem from '../components/products/FavoriteItem'

export default function FavoriteList() {

  const favoriteList = useSelector((state:RootState) => state.products.favorites)

  return (
    <Grid container spacing={3}>
    {favoriteList.map((item) => {
      return <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}><FavoriteItem item={item} />
      </Grid>
    })}
    </Grid>
  )
}
