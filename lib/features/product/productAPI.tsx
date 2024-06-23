// async function getMovie(id: string) {
//     console.log(`Fetching videos:${Date.now()}, id:${id}`);
//     await new Promise((resolve) => setTimeout(resolve, 3000));
//     const res = await fetch(`${API_URL}/api/v1/tickers/${id}`);
//     return res.json();
// }

import { API_URL } from "@/app/(home)/page";

export const fetchMovie: any = async (id: string) => {
    console.log(`Fetching videos:${Date.now()}, id:${id}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch(`${API_URL}/api/v1/tickers/${id}`);

    return res.json();
}