import { API_URL } from "@/app/(home)/page";

export const getVideos: any = async (id: string) => {
    console.log(`Fetching videos:${Date.now()}, id:${id}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error("something broke...");
    const url = `${API_URL}/api/v1/tickers/${id}`
    const res = await fetch(url);

    return res.json();
}