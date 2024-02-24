import axios from "axios";

//types
import { TFilterPropsEdited } from "../types/Filter";

import { config } from "./config";

export const getDiscoverMovieWithoutFilters = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
};

export const getDiscoverMovie = async (data: TFilterPropsEdited) => {
    const { genres, year, VOD } = data;

    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&${year === null ? '' : `primary_release_year=${year}`}&sort_by=popularity.desc${genres === null ? '' : `&with_genres=${genres}`}${VOD === null ? '' : `&with_watch_providers=netflix`}`;

    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
};

export const getDiscoverSerie = async (data: TFilterPropsEdited) => {
    const { genres, year, VOD } = data;

    const url = `https://api.themoviedb.org/3/discover/tv?${year === null ? '' : `first_air_date_year=${year}&`}include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc${genres === null ? '' : `&with_genres=${genres}`}${VOD === null ? '' : `&with_networks=${VOD}`}`;

    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
};
