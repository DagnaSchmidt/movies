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

export type TSerieCompanyProps = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
};

export type TSerieProductionCountryProps = {
    iso_3166_1: string,
    name: string
};

export type TLanguageProps = {
    "english_name": string,
    "iso_639_1": string,
    "name": string
}

export type TSingleSerieProps = {
    adult: boolean,
    backdrop_path: string,
    created_by: object[],
    episode_run_time: number[],
    first_air_date: string,
    genres: object[],
    homepage: string,
    id: number,
    in_production: boolean,
    languages: string[],
    last_air_date: string,
    last_episode_to_air: TSerieEpisodeProps,
    name: string,
    next_episode_to_air: TSerieEpisodeProps | null,
    networks: TSerieCompanyProps,
    number_of_episodes: number,
    number_of_seasons: number,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: TSerieCompanyProps[],
    production_countries: TSerieProductionCountryProps[],
    seasons: TSerieSeasonProps[],
    spoken_languages: TLanguageProps[],
    status: string,
    tagline: string,
    type: string,
    vote_average: number,
    vote_count: number
}
