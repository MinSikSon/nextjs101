"use client"

import { initVideos, selectState, selectVideo } from "@/lib/features/videostest/videosSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { useEffect } from "react"

export const MovieVideos = ({ id }: { id: string }) => {
    const videoState: string = useAppSelector(selectState);
    const videos: any = useAppSelector(selectVideo);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if ("" == videoState) {
            dispatch(initVideos(id));
        }
    }, []);

    return <>
        <div>{videos}</div>
    </>
}