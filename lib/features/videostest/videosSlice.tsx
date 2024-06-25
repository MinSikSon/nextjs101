import { createAppSlice } from "@/lib/createAppSlice";
import { getVideos } from "./videosAPI";

interface Videos {
    state: string;
    value: any
}
const initialState: Videos = {
    state: "",
    value: []
}
export const videosSlice = createAppSlice({
    name: "videos",
    initialState,
    reducers: (create) => ({
        initVideos: create.asyncThunk(
            async (id: string) => {
                const res = await getVideos(id);

                return res;
            },
            {
                pending: (state) => {
                    state.state = "loading";
                },
                fulfilled: (state, action) => {
                    state.state = "loaded";
                    state.value = JSON.stringify(action.payload);
                },
                rejected: (state) => {
                    state.state = "failed";
                }
            }
        )
    }),
    selectors: {
        selectState: (videos) => videos.state,
        selectVideo: (videos) => videos.value,
    }
});

export const { initVideos } = videosSlice.actions;
export const { selectState, selectVideo } = videosSlice.selectors;