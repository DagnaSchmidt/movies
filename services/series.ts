import axios from "axios";

import { config } from "./config";

export const getSingleSerieData = async (id: number) => {
    const url = `https://api.themoviedb.org/3/tv/${id}?language=en-US`;
    const response = await axios.get(url, config);
    return response.data;
};

export const getSingleSerieCast = async (id: number) => {
    const url = `https://api.themoviedb.org/3/tv/${id}/credits?language=en-US`;
    const response = await axios.get(url, config);
    return response.data.cast.slice(0, 12);
};
