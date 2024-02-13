export type TRatedMovieProps = {
    id: number,
    type: 'movies' | 'series',
    rate: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9,
    created_at: Date
};

export type TReviewProps = {
    review: string,
    created_at: Date,
    updated_at: Date,
    type: 'movies' | 'series',
    id: number
};

type Id = {
    id: number
};

export type TUserProps = {
    email: string,
    password: string,
    f_name: string,
    l_name: string,
    date_of_birth: Date,
    avatar_path: string,
    created_at: Date,
    updated_at: Date,
    rated: {
        movies: TRatedMovieProps[],
        series: TRatedMovieProps[]
    },
    watchlist: {
        movies: Id[],
        series: Id[]
    },
    reviews: TRatedMovieProps[],
    // friends

}
