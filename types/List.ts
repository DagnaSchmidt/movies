export type TListProps = {
    type: 'movie' | 'tv'
    category: 'popular' | 'upcoming' | 'top_rated' | 'on_the_air'
};

// movie + popular / upcoming / top_rated
// tv + popular / top_rated / on_the_air

export type TMovieProps = {
    adult: boolean,
    backdrop_path: string,
    genre_ids: Array<number>,
    id: number,
    original_language: string,
    original_title: string,
    overview: Text,
    popularity: number,
    poster_path: string,
    release_date: Date,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    key: number
};

export type TSerieProps = {
    backdrop_path: string,
    first_air_date: Date,
    genre_ids: Array<number>,
    id: number,
    name: string,
    origin_country: string,
    original_language: string,
    original_name: string,
    overview: Text,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number,
    key: number
};

export type TMovieCardProps = TMovieProps | TSerieProps | null;
