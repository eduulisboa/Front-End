import React from "react";
import { Product } from "../types/type";


type Prop = {
  item: Product
}

export default function ProductItem({ item }:Prop) {
  return <div>
    <div>{item.title} </div>
    <div>{item.price} </div>
    <div>{item.description} </div>
  </div>;
}
