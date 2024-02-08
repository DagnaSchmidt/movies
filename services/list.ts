import axios from "axios";
import { NEXT_PUBLIC_TMDB_KEY, API_URL } from "./config";

//types
import { TListProps } from "../types/List";

const config = {
    headers: {
        accept: 'application/json',
        Authorization: NEXT_PUBLIC_TMDB_KEY
    }
};


export const getList = async (data: TListProps) => {
    const url = `https://api.themoviedb.org/3/${data.type}/${data.category}?language=en-US&page=1`;
    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
};

export const checkAuth = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/authentication', config);
    return response.data;
};
