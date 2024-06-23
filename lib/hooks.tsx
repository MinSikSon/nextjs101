import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppDispatch = useDispatch;
// export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppSelector = useSelector;
// export const useAppStore = useStore.withTypes<AppStore>();
export const useAppStore = useStore;