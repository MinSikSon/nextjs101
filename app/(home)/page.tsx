import Link from "next/link";

export const metadata = {
    title: 'Home',
    // description: 'The best movies on the best',
}

export const API_URL = "https://idiotquant-backend.tofu89223.workers.dev";
async function getMovies() {
    console.log("im fetching");
    // await new Promise((resolve) => setTimeout(resolve, 5000)); // NOTE: 의도적 5초 delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = fetch(`${API_URL}/stock/financial-info-ncav`);
    const json = (await res).json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return <>
        {/* <h1>Hello NextJS 101!</h1> */}
        {/* <div>{JSON.stringify(movies)}</div> */}
        {movies.map((movie) => <li key={movie.corpCode}><Link href={`/movies/${movie.tickerName}`}>{movie.tickerName}</Link></li>)}
    </>
}

