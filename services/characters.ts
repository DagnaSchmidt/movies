import axios from "axios";

import { config } from "./config";

export const getSingleCharacter = async (id: number) => {
    const url = `https://api.themoviedb.org/3/person/${id}?language=en-US`;
    const response = await axios.get(url, config);
    return response.data;
};

export const getSingleCharacterImages = async (id: number) => {
    const url = `https://api.themoviedb.org/3/person/${id}/images`;
    const response = await axios.get(url, config);
    console.log(response.data);
    return response.data.profiles;
};

export const getSingleCharacterTaggedImages = async (id: number) => {
    const url = `https://api.themoviedb.org/3/person/${id}/tagged_images?page=1`;
    const response = await axios.get(url, config);
    return response.data.results;
};

export const getSingleCharacterMovieCredits = async (id: number) => {
    const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?language=en-US`;
    const response = await axios.get(url, config);
    return response.data.results;
};
