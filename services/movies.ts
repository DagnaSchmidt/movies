import axios from "axios";
import { TMDB_KEY, API_URL } from "./config";

const config = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_KEY}`
    }
};


export const getPopularMovies = async () => {
    const response = await axios.get(`${API_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`, config);
    return response.data.results.slice(0, 10);
}
