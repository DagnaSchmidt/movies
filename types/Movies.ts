import { TGenreProps, TCompanyProps, TProductionCountryProps, TSpokenLanguagesProps } from "./Shared";


export type TSingleMovieProps = {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null,
    budget: number,
    genres: TGenreProps[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: TCompanyProps[],
    production_countries: TProductionCountryProps[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: TSpokenLanguagesProps[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}
