"use client"

import { useEffect, useState } from "react";

// export const metadata = {
//     title: 'Home',
//     // description: 'The best movies on the best',
// }

export default function Page() {
    const [isLoading, setIsLoading] = useState(true)
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const res = await fetch("https://idiotquant-backend.tofu89223.workers.dev/api/v1/tickers/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90");
        const json = await res.json();
        setMovies(json);
    };

    useEffect(() => {
        getMovies();
        setIsLoading(false);
    })
    return <>
        <h1>Hello NextJS 101!</h1>
        <div>{isLoading ? "Loading..." : JSON.stringify(movies)}</div>
    </>
}

