import axios from "axios";

//types
import { TFilterProps } from "../types/Filter";

import { config } from "./config";

export const getDiscoverMovieWithoutFilters = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
}

export const getDiscoverMovie = async (data: TFilterProps) => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
}

export const getDiscoverSerie = async (data: TFilterProps) => {

}

// https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc

// 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc'
