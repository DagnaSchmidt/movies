"use client"
import { useState } from "react"

//types
import { TUserProps, TRatedMovieProps } from "../../types/User";

//components
import Icon from "../icons/icon";

interface IRateSystem {
    id: number,
    type: 'movies' | 'series'
}

export default function RateSystem(props: IRateSystem) {
    const { type, id } = props;

    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<null | TUserProps>();
    const [ratedMovie, setRatedMovie] = useState<null | TRatedMovieProps>(null);

    if (user === null) {
        return null;
    };


    if (!isOpen) {
        return (
            <div
                className="flex flex-col items-center gap-2 hover:cursor-pointer"
                onClick={() => setIsOpen(true)}
            >
                <div className="flex gap-2 items-center">
                    {ratedMovie === null ? <Icon name='StarLine' fill='fill-neutral300' /> : <Icon name='Star' fill='fill-primary' />}
                    {ratedMovie !== null && <p className="text-white font-bold text-lg">{ratedMovie.rate}</p>}
                </div>
                <p className="text-white opacity-80 font-regular text-xs">{ratedMovie === null ? 'rate this' : 'your rate'}</p>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

};
