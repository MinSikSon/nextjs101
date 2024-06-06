import { API_URL } from "../../../(home)/page";


async function getMovie(id: string) {
    console.log(`Fetching movies:${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(`${API_URL}/api/v1/tickers/${id}`);
    return res.json();
}

async function getVideos(id: string) {
    console.log(`Fetching videos:${Date.now()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const res = await fetch(`${API_URL}/api/v1/tickers/${id}`);
    return res.json();
}

export default async function MovieDetail({ params: { id } }: { params: { id: string } }) {
    console.log(`----------------------------------------------------`);
    console.log(`Start fetching`);
    // const movie = await getMovie(id);
    // const videos = await getVideos(id);
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // NOTE: 병렬 fetch

    return <>
        <h2>{decodeURIComponent(id)}</h2>
        {/* <h2>{JSON.stringify(movie)}</h2> */}
        <div>종가 : {movie.종가}</div>
        <div>시총 : {movie.시가총액}</div>
    </>;
}