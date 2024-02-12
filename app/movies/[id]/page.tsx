"use client"
import { useEffect, useState } from "react";
import { getSingleMovieData } from "../../../services/movies";

//components
import SingleMovieHeader from "../../../components/sections/movies/singleMovieHeader";

//types
import { TSingleMovieProps } from "../../../types/Movies";

export default function Page() {
    const id = 866398;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TSingleMovieProps | null>(null);
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getSingleMovieData(id);
                setData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single movie data');
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

    if (data !== null && !isLoading) {
        return (
            <div className="min-h-screen w-screen max-w-[1024px] flex flex-col items-center md:px-12">
                <SingleMovieHeader {...data} />
            </div>
        )
    };

};
