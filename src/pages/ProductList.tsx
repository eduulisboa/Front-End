import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import { fetchProductData } from "../redux/thunk/products";
import ProductItem from "../components/products/ProductItem";
import Loading from "../components/loading/Loading";
import SearchProduct from "../components/products/SearchProduct";
import { Grid } from "@mui/material";



export default function ProductList() {
  const productList = useSelector((state:RootState) => state.products.products)
  const isLoading = useSelector((state:RootState) => state.products.isLoading)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchProductData())
  },[dispatch])
  if (isLoading) {
    return <div><Loading /></div>
  }
  return <div>
    <SearchProduct />
    <Grid container spacing={3}>
    {productList.map((item) => {
      return <Grid item xs={12} sm={6} md={4} lg={2} key={item.id}><ProductItem item={item} />
      </Grid>
    })}
    </Grid>
  </div>;
}