import { useFetch } from "../services/Hooks/useFetch";
import { staticData } from "./endpoints";

// chose implementation
const endpoints = staticData;

export const FetchWelcome = () => {
    return useFetch(endpoints.welcome);
}

export const FetchSelection = () => {
    return useFetch(endpoints.selection);
}

