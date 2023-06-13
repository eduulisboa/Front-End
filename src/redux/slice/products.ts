import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Product } from "../../types/type";

type InitialState = {
    products: Product[]
    isLoading: boolean
    product: Product
}

const initialState: InitialState = {
    products: [],
    isLoading: true,
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
        getProductData: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload
            state.isLoading = false
        },
        searchProducts: (state,action: PayloadAction<string>) =>{
            const result = state.products.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.products = result
        },
        getProductDetail: (state, action: PayloadAction<Product> ) =>{
            const result = action.payload;
            state.product = result
        }
    }
})

export const productActions = productSlice.actions
const productReducer = productSlice.reducer
export default productReducer
