import axios from "axios";

import { config } from "./config";

export const getSingleCharacter = async (id: number) => {
    const url = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
    const response = await axios.get(url, config);
    return response.data;
};
