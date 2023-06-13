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

  return <div>
    <div>{item.title} </div>
    <div>{item.price} </div>
    <div>{item.description} </div>
    <div>
        <button onClick={()=>{getProductDetail(item)}}>go to detail</button>
    </div>
  </div>;
}
