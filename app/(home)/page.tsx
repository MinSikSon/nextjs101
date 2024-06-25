"use client"

import { initStockList, selectState, selectStock } from "@/lib/features/stock/stockSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import { useEffect } from "react";

// export const metadata = {
//     title: 'Home',
//     // description: 'The best movies on the best',
// }

export const API_URL = "https://idiotquant-backend.tofu89223.workers.dev";

export default function HomePage(props) {
    // console.log(`[HomePage]`);
    const stocks = useAppSelector(selectStock);
    const state = useAppSelector(selectState);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if ("" == state) {
            dispatch(initStockList());
        }
    }, [])

    // console.log(`[HomePage] stocks:`, stocks);
    return <>
        {/* <h1>Hello NextJS 101!</h1> */}
        {/* <div>{JSON.stringify(movies)}</div> */}
        {stocks.map((stock, index) => <li key={index}><Link href={decodeURIComponent(`/movies/${stock.tickerName}`)}>{stock.tickerName}</Link></li>)}
    </>
}

