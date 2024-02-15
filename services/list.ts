import axios from "axios";

//types
import { TListProps } from "../types/List";

import { config } from "./config";


export const getList = async (data: TListProps) => {
    const url = `https://api.themoviedb.org/3/${data.type}/${data.category}?language=en-US&page=1`;
    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
};

export const checkAuth = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/authentication', config);
    return response.data;
};

export const getSearchList = async (data: string) => {
    const url = `https://api.themoviedb.org/3/search/multi?query=${data}&include_adult=false&language=en-US&page=1`;
    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
};
