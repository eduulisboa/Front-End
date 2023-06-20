import React from 'react'
import { useSelector } from 'react-redux'

import { Grid } from '@mui/material'

import { RootState } from '../redux/store'
import CartItem from '../components/products/CartItem'


export default function CartList() {

  const cartList = useSelector((state:RootState) => state.products.cart)

  return (
    <Grid container spacing={3}>
    {cartList.map((item) => {
      return <Grid item lg={3} key={item.id}><CartItem item={item} />
      </Grid>
    })}
    </Grid>
  )
}