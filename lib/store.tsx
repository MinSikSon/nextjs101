import { Action, combineSlices, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { counterSlice } from "@/lib/features/counter/counterSlice";
import { productSlice } from "@/lib/features/product/productSlice";

const rootReducer = combineSlices(counterSlice, productSlice);
export type RootState = ReturnType<typeof rootReducer>;

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppDispatch = AppStore["dispatch"];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
    ThunkReturnType,
    RootState,
    unknown,
    Action
>;

