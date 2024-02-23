export type TSinglePersonProps = {
    adult: boolean,
    also_known_as: string[],
    biography: string,
    birthday: 'string',
    deathday: 'string' | null,
    gender: number,
    homepage: string | null,
    id: number,
    imdb_id: string,
    known_for_department: string,
    name: string,
    place_of_birth: string,
    popularity: number,
    profile_path: string
};

export type TCastProps = {
    adult: boolean,
    gender: 1 | 2,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id: number,
    character: string,
    credit_id: string,
    order: number
};

export type TCreatorProps = {
    id: number,
    credit_id: string,
    name: string,
    gender: 1 | 2,
    profile_path: string
};
