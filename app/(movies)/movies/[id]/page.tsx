import { Suspense } from "react";
import MovieVideos from "../../../../components/movie-videos";
import { useAppDispatch } from "../../../../lib/hooks";
import { MovieInfo } from "@/components/movie-info";

export default async function MovieDetail({ params: { id } }: { params: { id: string } }, ...props) {
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]); // NOTE: 병렬 fetch
    const korId: string = decodeURIComponent(id);
    console.log(`props`, props);

    const dispatch = useAppDispatch;
    console.log(`dispatch`, dispatch);
    return <>
        <h2>{korId}</h2>
        <div>
            1
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={korId} />
            </Suspense>
        </div>
        <div>
            2
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={korId} />
            </Suspense>
        </div>
    </>;
}