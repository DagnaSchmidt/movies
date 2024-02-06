import axios from "axios";
import { NEXT_PUBLIC_TMDB_KEY, API_URL } from "./config";

const config = {
    headers: {
        accept: 'application/json',
        Authorization: NEXT_PUBLIC_TMDB_KEY
    }
};


export const getPopularMovies = async () => {
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    const response = await axios.get(url, config);
    return response.data.results.slice(0, 10);
};

export const checkAuth = async () => {
    const response = await axios.get('https://api.themoviedb.org/3/authentication', config);
    return response.data;
};
