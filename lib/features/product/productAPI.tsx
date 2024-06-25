import { API_URL } from "@/app/(home)/page";

export const fetchMovie: any = async (id: string) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const url = `${API_URL}/api/v1/tickers/${id}`;
    console.log(`[fetchMovie] API_URL`, API_URL, `, url:`, url);

    const res = await fetch(url);

    return res.json();
}