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

export const FetchAboutUs = () => {
    return useFetch(endpoints.aboutus);
}

export const FetchLeistungen = () => {
    return useFetch(endpoints.leistungen);
}

export const FetchProjects = () => {
    return useFetch(endpoints.projects);
}

export const FetchFooter = () => {
    return useFetch(endpoints.footer);
}

export const FetchUnternehmen = () => {
    return useFetch(endpoints.unternehmen);
}

export const FetchRechtliches = () => {
    return useFetch(endpoints.rechtliches);
}



