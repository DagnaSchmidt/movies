export type TFilterProps = {
    type: "movies" | "series",
    genres: number[] | null,
    year: number | null,
    VOD: number | null
};

export type TFilterPropsEdited = {
    genres: string | null,
    year: number | null,
    VOD: string | null
};
