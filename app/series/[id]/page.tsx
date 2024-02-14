"use client"
import { useEffect, useState } from "react";
import { getSingleSerieData } from "../../../services/series";

//components
import SingleMovieHeader from "../../../components/sections/movies/singleMovieHeader";
import RatingsSection from "../../../components/sections/ratingsSection";
import TextSection from "../../../components/sections/textSection";
import SingleMovieGenres from "../../../components/sections/movies/singleMovieGenres";
import SingleSerieDetails from "../../../components/sections/series/singleSerieDetails";

//types
import { TSingleSerieProps } from "../../../types/Series";


export default function Page({ params }: { params: { id: number } }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TSingleSerieProps | null>(null);
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getSingleSerieData(params.id);
                setData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single serie data');
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
        <div className="min-h-screen w-screen max-w-[1024px] flex flex-col items-center md:px-12 gap-7">
            <SingleMovieHeader {...data} />

            <RatingsSection type='movies' id={params.id} />

            <TextSection title="Short description" text={data.overview} />

            <div className="flex flex-col md:flex-row gap-6 w-full">
                <SingleSerieDetails {...data} />
                <SingleMovieGenres />
            </div>
        </div>
    )
};
