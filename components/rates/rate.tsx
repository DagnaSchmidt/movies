"use client"
import { useState } from "react";
import Icon from "../icons/icon";

export default function Rate() {
    //useState<TMovieType | null>
    //fetch data from own db on mount
    const [movie, setMovie] = useState({
        id: 998,
        vote_average: 7.8,
        vote_count: 3,
        reviews: [""],
    });


    return (
        <div className="flex flex-col items-center gap-1">
            <div className="flex gap-2 items-center">
                <Icon name='Star' fill='fill-primary' />
                <p className="text-white font-bold text-lg">{movie === null ? '0' : movie.vote_average}</p>
            </div>
            <p className="text-white opacity-80 font-regular text-xs">{movie === null ? '0' : movie.vote_count} rates</p>
        </div>
    )
};
