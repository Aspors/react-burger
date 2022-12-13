import type { AppDispatch } from "../services/redux/store/store";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
