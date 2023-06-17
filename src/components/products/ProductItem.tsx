import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";

import { productActions } from "../../redux/slice/products";
import { AppDispatch } from "../../redux/store";
import { Product } from "../../types/type";

import { IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


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

  function getFavoriteProducts (item:Product) {
    dispatch(productActions.getFavorite(item))
  }
  function getCartProducts (item:Product) {
    dispatch(productActions.getCartList(item))
  }

  return <div>
    <IconButton onClick={() => getProductDetail(item)}>
    <img src={item.images[0]} alt={item.title} height="400" width="300" />
        </IconButton>
    <div>{item.title} </div>
    <div>${item.price} </div>
    <div>
      <IconButton  onClick={() => getFavoriteProducts(item)}>
        <FavoriteIcon color={item ? "secondary": "primary"} />
      </IconButton>
      <IconButton onClick={() => getCartProducts(item)}>
        <AddShoppingCartIcon color={"primary"} />
      </IconButton>
    </div>
  </div>;
}
