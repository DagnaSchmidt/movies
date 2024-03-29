import axios from "axios";

import { config } from "./config";

export const getSingleMovieData = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const response = await axios.get(url, config);
    return response.data;
};

export const getSingleMovieCast = async (id: number) => {
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const response = await axios.get(url, config);
    return response.data.cast.slice(0, 12);
};
