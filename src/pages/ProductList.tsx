import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../redux/store";
import ProductItem from "../components/ProductItem";
import { fetchProductData } from "../redux/thunk/products";
import Loading from "../components/Loading";


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
    {productList.map((item) => {
      return <ProductItem key={item.id} item={item} />
    })}
  </div>;
}