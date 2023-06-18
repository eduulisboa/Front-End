import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
    products: Product[]
    filteredProduct: Product[]
    isLoading: boolean
    product: Product
    favorites: Product[]
    cart: Product[]
}

const initialState: InitialState = {
    products: [],
    filteredProduct: [],
    isLoading: true,
    cart: [],
    favorites: [],
    product: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        images: [""],
        creationAt: "",
        updatedAt: "",
        category: {
            id: 0,
            name: "",
            image: "",
            creationAt: "",
            updatedAt: ""
        }
    },

}


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProductData: (state, action: PayloadAction<Product[]>) => {
          state.products = action.payload
          state.filteredProduct = action.payload
          state.isLoading = false
        },
        searchProducts: (state,action: PayloadAction<string>) =>{
            const result = state.products.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.filteredProduct = result
        },
        getProductDetail: (state, action: PayloadAction<Product> ) =>{
            const result = action.payload;
            state.product = result
        },
        updateFavoriteList: (state,action: PayloadAction<Product>) => {
            const result = state.favorites.some((item) => item.id === action.payload.id)
              if (result) {
                state.favorites = state.favorites.filter((item) => item.id !== action.payload.id)
              } else {
                state.favorites.push(action.payload);
              }
        },
        updateCartList: (state,action: PayloadAction<Product>) => {
            const result = state.cart.some((item) => item.id === action.payload.id)
              if (result) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id)
              } else {
                state.cart.push(action.payload);
              }
        }
    }
})

export const productActions = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer
