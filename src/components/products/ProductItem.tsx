import React from "react";
import { Product } from "../../types/type";
import { useDispatch} from "react-redux";
import { productActions } from "../../redux/slice/products";
import { AppDispatch } from "../../redux/store";
import { useNavigate } from "react-router-dom";


type Prop = {
  item: Product
}


export default function ProductItem({ item }:Prop) {

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  function getProductDetail(item:Product) {
    dispatch(productActions.getProductDetail(item))
    navigate(`/products/${item.id}`)
  }

  function getFavoriteProduct (item:Product) {
    dispatch(productActions.favorite(item))
  }

  return <div>
    <img src={item.images[0]} alt={item.title} />
    <div>{item.title} </div>
    <div>{item.price} </div>
    <div>
        <button onClick={()=>{getProductDetail(item)}}>Check the Details</button>
        <button onClick={()=>{getFavoriteProduct(item)}}>add to favorite</button>
    </div>
  </div>;
}
