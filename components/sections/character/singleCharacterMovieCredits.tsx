"use client"
import { useEffect, useState } from "react";

//services
import { getSingleCharacterMovieCredits } from "../../../services/characters";


export default function SingleCharacterMovieCredits({ id }: { id: number }) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getSingleCharacterMovieCredits(id);
                setData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single character movie credits');
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div>
                SKELETON HERE
            </div>
        )
    };

    return (
        <div>
            MOVIE CREDITS
        </div>
    )
};
