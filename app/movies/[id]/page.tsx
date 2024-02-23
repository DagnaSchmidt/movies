"use client"
import { useEffect, useState } from "react";
import { getSingleMovieCast, getSingleMovieData } from "../../../services/movies";

//components
import SingleMovieHeader from "../../../components/sections/movies/singleMovieHeader";
import RatingsSection from "../../../components/sections/ratingsSection";
import TextSection from "../../../components/sections/textSection";
import SingleMovieDetails from "../../../components/sections/movies/singleMovieDetails";
import SingleMovieGenres from "../../../components/sections/movies/singleMovieGenres";

//types
import { TSingleMovieProps } from "../../../types/Movies";
import { TCastProps } from "../../../types/Peoples";
import SingleMovieCast from "../../../components/sections/movies/singleMovieCast";


export default function Page({ params }: { params: { id: number } }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TSingleMovieProps | null>(null);
    const [cast, setCast] = useState<TCastProps[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getSingleMovieData(params.id);
                const newCast = await getSingleMovieCast(params.id);
                setData(newData);
                setCast(newCast);
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
            <div className="min-h-screen w-screen max-w-[1024px] flex flex-col items-center md:px-12 gap-7 pb-8">
                <SingleMovieHeader {...data} />

                <RatingsSection type='movies' id={params.id} />

                <TextSection title="Short description" text={data.overview} />

                <div className="flex flex-col md:flex-row gap-6 w-full pt-6">
                    <SingleMovieDetails {...data} />
                    <SingleMovieGenres data={data.genres} />
                </div>

                {/* VIDEOS SLIDER */}

                {
                    cast &&
                    <SingleMovieCast cast={cast} />
                }

                {/* CAST */}

                {/* REVIEWS */}

                {/* SUGGESTIONS */}
            </div>
        )
    };

};
