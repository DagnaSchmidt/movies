"use client"
import { useState } from "react";

//types
import { TUserProps } from "../../types/User";

//components
import BookmarkIcon from "../icons/bookmarkIcon"

interface IAddToListProps {
    id: number,
    type: 'movies' | 'series'
};

export default function AddToList(props: IAddToListProps) {
    const { type, id } = props;

    const [user, setUser] = useState<null | TUserProps>();

    if (user === null) {
        return null;
    };

    return (
        <div className="flex flex-col items-center">
            <BookmarkIcon id={id} />
            <p className="text-white opacity-80 font-regular text-xs">add to list</p>
        </div>
    )
};
