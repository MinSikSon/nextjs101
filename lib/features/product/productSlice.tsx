import { createSlice } from "@reduxjs/toolkit";

export interface Product {
    name: string
}
const initialState: Product = {
    name: ''
}
const product = createSlice({
    name: 'productReducer',
    initialState,
    reducers: {
        initializeProduct: (state, action) => {
            const { name } = action.payload;
            state.name = name;
        },
        setProductName: (state, action) => {
            const { name } = action.payload;
            state.name = name;
        }
    }
});

export const { initializeProduct, setProductName } = product.actions;