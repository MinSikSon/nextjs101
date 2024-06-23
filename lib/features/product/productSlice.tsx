import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchMovie } from "./productAPI";

export interface Product {
    name: any
}
const initialState: Product = {
    name: ''
}
export const productSlice = createAppSlice({
    name: 'product',
    initialState,
    reducers: (create) => ({
        setProductName: create.asyncThunk(
            async (id: string) => {
                const response = await fetchMovie(id);
                console.log(`[productSlice]`, response);

                return response;
            },
            {
                pending: (state) => {
                    state.name = "loading";
                },
                fulfilled: (state, action) => {
                    console.log(`[productSlice] fulfilled`, action.payload);
                    state.name = JSON.stringify(action.payload);
                },
                rejected: (state) => {
                    state.name = "failed";
                },
            },
        )
    }),
    selectors: {
        selectName: (product) => product.name,
    }
});

export const { setProductName } = productSlice.actions;
export const { selectName } = productSlice.selectors;