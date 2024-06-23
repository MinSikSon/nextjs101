import { createSlice } from "@reduxjs/toolkit";

interface Count {
    value: number;
}
const initialState: Count = {
    value: 0
}
const count = createSlice({
    name: 'countReducer',
    initialState,
    reducers: {
        initializeCount: (state, action) => {
            const { value } = action.payload;
            state.value = value;
        }
        // add: (state, action) => {
        //     state.push({ text: action.payload, id: Date.now() });
        // },
        // remove: (state, action) => state.filter(item => item.id !== action.payload),
    }
})

export const { initializeCount } = count.actions;