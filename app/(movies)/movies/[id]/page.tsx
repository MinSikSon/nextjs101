import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import { useAppDispatch } from "../../../../lib/hooks";

export default async function MovieDetail({ params: { id } }: { params: { id: string } }, ...props) {
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // NOTE: 병렬 fetch
    const korId = decodeURIComponent(id);
    console.log(`props`, props);

    const dispatch = useAppDispatch;
    console.log(`dispatch`, dispatch);
    return <>
        <h2>{korId}</h2>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={korId} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={korId} />
        </Suspense>
    </>;
}