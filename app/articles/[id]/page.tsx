"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

//types
import { TSingleSerieProps } from "../../../types/Series";

//services
import { getSingleSerieData } from "../../../services/series";

//components
import SingleMovieHeader from "../../../components/sections/movies/singleMovieHeader";
import H2 from "../../../components/texts/h2";

//data
import { articlesData } from "../../../data/articlesData.js";
import H3 from "../../../components/texts/h3";


export default function ArticlePage({ params }: { params: { id: number } }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TSingleSerieProps | null>(null);

    const textData = articlesData.find(i => i.id === Number(params.id));

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

    if (data !== null && !isLoading) {
        return (
            <div className="min-h-screen w-screen max-w-[1024px] flex flex-col items-center md:px-12 gap-7 pb-8">
                <SingleMovieHeader {...data} />

                <div className="w-full pt-6 px-4">
                    <H2 title={textData.main_title} />
                </div>

                <p className="text-white font-base px-8">{textData.paragraph_1}</p>

                <div className="relative w-full h-64 md:h-80 px-4">
                    <Image
                        className="object-cover"
                        src={`https://image.tmdb.org/t/p/original${textData.images[0]}`}
                        alt={textData.images[0]}
                        fill
                        sizes="(max-width: 768px) 100vw, (min-width: 767px) 100%"
                    />
                </div>

                <div className="flex flex-col gap-7">
                    <H3 title={textData.paragraph_2.title} />
                    {
                        textData.paragraph_2.text.map(i => <p key={i} className="text-white font-base px-8">{i}</p>)
                    }
                </div>

                <div className="relative w-full h-64 md:h-80 px-4">
                    <Image
                        className="object-cover"
                        src={`https://image.tmdb.org/t/p/original${textData.images[1]}`}
                        alt={textData.images[1]}
                        fill
                        sizes="(max-width: 768px) 100vw, (min-width: 767px) 100%"
                    />
                </div>


            </div>
        )
    };
};
