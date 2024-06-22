import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
    console.log(`Fetching videos:${Date.now()}, id:${id}`);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    // throw new Error("something broke...");
    const res = await fetch(`${API_URL}/api/v1/tickers/${id}`);
    return res.json();
}

export default async function MovieVideos({ id }: { id: string }) {
    console.log(id);
    const videos = await getVideos(id);
    return <>{JSON.stringify(videos)}</>;
}
