import { createAppSlice } from "@/lib/createAppSlice";
import { fetchMovie } from "./productAPI";

export interface Product {
    state: string;
    name: any;
}
const initialState: Product = {
    state: "",
    name: []
}
export const productSlice = createAppSlice({
    name: 'product',
    initialState,
    reducers: (create) => ({
        setProductName: create.asyncThunk(
            async (id: string) => {
                console.log(`id`, id);
                const response = await fetchMovie(id);
                console.log(`[productSlice]`, response);

                return response;
            },
            {
                pending: (state) => {
                    state.state = "loading";
                },
                fulfilled: (state, action) => {
                    state.state = "loaded";
                    console.log(`[productSlice] fulfilled`, action.payload);
                    state.name = JSON.stringify(action.payload);
                },
                rejected: (state) => {
                    state.state = "failed";
                },
            },
        )
    }),
    selectors: {
        selectState: (product) => product.state,
        selectName: (product) => product.name,
    }
});

export const { setProductName } = productSlice.actions;
export const { selectState, selectName } = productSlice.selectors;