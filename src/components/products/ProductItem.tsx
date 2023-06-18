import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { productActions } from "../../redux/slice/products";
import { AppDispatch } from "../../redux/store";
import { Product } from "../../types/type";

import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

type Prop = {
  item: Product;
  favoriteList: Product[];
  cartList: Product[];
};

export default function ProductItem({ item, favoriteList, cartList }: Prop) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  function getProductDetail(item: Product) {
    dispatch(productActions.getProductDetail(item));
    navigate(`/products/${item.id}`);
  }

  function setFavoriteProducts(item: Product) {
    dispatch(productActions.updateFavoriteList(item));
  }

  function isFavorite(item: Product) {
    return favoriteList.some((favorite) => favorite.id === item.id);
  }
  function setCartProducts(item: Product) {
    dispatch(productActions.updateCartList(item));
  }
  function isCart(item: Product) {
    return cartList.some((cart) => cart.id === item.id);
  }

  return (
    <div>
      <IconButton onClick={() => getProductDetail(item)}>
        <img src={item.images[0]} alt={item.title} height="400" width="300" />
      </IconButton>
      <div>{item.title} </div>
      <div>${item.price} </div>
      <div>
        <IconButton onClick={() => setFavoriteProducts(item)}>
          <FavoriteIcon color={isFavorite(item) ? "secondary" : "primary"} />
        </IconButton>
        <IconButton onClick={() => setCartProducts(item)}>
          <AddShoppingCartIcon color={isCart(item) ? "secondary" : "primary"} />
        </IconButton>
      </div>
    </div>
  );
}
