import { /*useFetch, */ useFetchTimeSimulation } from "../services/Hooks/useFetch";
import { staticData } from "./endpoints";

// chose implementation
const endpoints = staticData;

export const FetchWelcome = () => {
    return useFetchTimeSimulation(endpoints.welcome, 1000);
}

export const FetchSelection = () => {
    return useFetchTimeSimulation(endpoints.selection, 1000);
}

export const FetchAboutUs = () => {
    return useFetchTimeSimulation(endpoints.aboutus, 1000);
}

export const FetchLeistungen = () => {
    return useFetchTimeSimulation(endpoints.leistungen, 1000);
}

export const FetchProjects = () => {
    return useFetchTimeSimulation(endpoints.projects, 1000);
}


