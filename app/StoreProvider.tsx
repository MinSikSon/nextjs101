'use client'

import { useRef } from "react";
import { AppStore, makeStore } from "../lib/store";
import { Provider } from "react-redux";
import { initializeCount } from "../lib/features/counter/counterSlice";

export default function StoreProvider({
    children
}: {
    children: React.ReactNode,
}) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        console.log(`[StoreProvider]`);
        // Create the store instance the first time this renders
        storeRef.current = makeStore();
        storeRef.current.dispatch(initializeCount(0));
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}