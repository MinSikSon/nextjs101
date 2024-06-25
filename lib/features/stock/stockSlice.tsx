import { createAppSlice } from "@/lib/createAppSlice";
import { fetchStock } from "./stockAPI";

interface Stock {
    state: string,
    stocks: any
}

const initialState: Stock = {
    state: "",
    stocks: []
}

export const stockSlice = createAppSlice({
    name: "stock",
    initialState,
    reducers: (create) => ({
        initStockList: create.asyncThunk(
            async () => {
                const res = await fetchStock();

                return res;
            },
            {
                pending: (state) => {
                    state.state = "loading";
                },
                fulfilled: (state, action) => {
                    state.state = "loaded";
                    // console.log(`action.payload`, typeof action.payload);
                    state.stocks = action.payload;
                },
                rejected: (state) => {
                    state.state = "failed";
                }
            }
        )
    }),
    selectors: {
        selectState: (stock) => stock.state,
        selectStock: (stock) => stock.stocks,
    }
});

export const { initStockList } = stockSlice.actions;
export const { selectState, selectStock } = stockSlice.selectors;