"use client";

import { minus, plus, selectCount } from "@/lib/features/counter/counterSlice";
import { selectName, setProductName } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ReactNode, useEffect, useState } from "react";

export const MovieInfo = ({ id }: { id: string }) => {
    // const dispatch = useAppDispatch();
    // console.log(`[MovieInfo] dispatch`, dispatch);

    const name: ReactNode = useAppSelector(selectName);
    const count: ReactNode = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    // dispatch(setProductName(id));
    const [movie, setMovie] = useState('');


    useEffect(() => {
        console.log(`[MovieInfo !!] id`, id);
        dispatch(setProductName(id));
        // setMovie(dispatch(setProductName(id)));
    }, []);

    // return <>{JSON.stringify(videos)}</>;
    return <div>
        <div className="bg-black">
            <div>movieName : {name}</div>
            <button onClick={() => { dispatch(plus()) }}>count 증가</button>
            <button onClick={() => dispatch(minus())}>count 감소</button>
        </div>
        <div>count : {count}</div>
    </div>;
}
