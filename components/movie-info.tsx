"use client";

import { minus, plus, selectCount } from "@/lib/features/counter/counterSlice";
import { selectName, selectState, setProductName } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useEffect } from "react";

export const MovieInfo = ({ id }: { id: string }) => {
    // console.log(`[MovieInfo] id:`, id);

    const movieState = useAppSelector(selectState)
    const name = useAppSelector(selectName);
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    useEffect(() => {
        console.log(`[MovieInfo !!] id`, id);
        // if ("" == movieState) {
        dispatch(setProductName(id));
        // }
    }, []);

    // console.log(`name`, name);
    return <div>
        <div className="bg-black">
            <div>movieName : {name}</div>
            <button onClick={() => dispatch(plus())}>count 증가</button>
            <button onClick={() => dispatch(minus())}>count 감소</button>
        </div>
        <div>count : {count}</div>
    </div>;
}
