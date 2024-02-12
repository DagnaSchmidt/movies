import dotenv from 'dotenv';
dotenv.config();

export const NEXT_PUBLIC_TMDB_KEY = process.env.NEXT_PUBLIC_TMDB_KEY;

export const config = {
    headers: {
        accept: 'application/json',
        Authorization: NEXT_PUBLIC_TMDB_KEY
    }
};
