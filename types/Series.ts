import { TGenreProps, TCompanyProps, TProductionCountryProps, TSpokenLanguagesProps } from "./Shared";
import { TCreatorProps } from "./Peoples";

export type TSerieEpisodeProps = {
    id: number,
    name: string,
    overview: string,
    vote_average: number,
    vote_count: number,
    air_date: Date,
    episode_number: number,
    production_code: string,
    runtime: number,
    season_number: number,
    show_id: number,
    still_path: string
};

export type TSerieSeasonProps = {
    air_date: Date,
    episode_count: number,
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    season_number: number,
    vote_average: number
};

export type TSingleSerieProps = {
    adult: boolean,
    backdrop_path: string,
    created_by: TCreatorProps[],
    episode_run_time: number[],
    first_air_date: string,
    genres: TGenreProps[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: TSerieEpisodeProps,
    name: string,
    next_episode_to_air: TSerieEpisodeProps | null,
    networks: TCompanyProps,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: TCompanyProps[],
    production_countries: TProductionCountryProps[],
    seasons: TSerieSeasonProps[],
    spoken_languages: TSpokenLanguagesProps[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
};
