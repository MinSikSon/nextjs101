export const metadata = {
    title: 'Home',
    // description: 'The best movies on the best',
}

const URL = "https://idiotquant-backend.tofu89223.workers.dev/api/v1/tickers/%EC%82%BC%EC%84%B1%EC%A0%84%EC%9E%90";
async function getMovies() {
    console.log("im fetching");
    await new Promise((resolve) => setTimeout(resolve, 5000)); // NOTE: 의도적 5초 delay

    const res = fetch(URL);
    const json = (await res).json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return <>
        <h1>Hello NextJS 101!</h1>
        <div>{JSON.stringify(movies)}</div>
    </>
}

