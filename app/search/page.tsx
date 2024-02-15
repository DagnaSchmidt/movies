"use client"
import { useEffect, useState } from "react";

//types
import { TSingleMovieProps } from "../../types/Movies";
import { TSingleSerieProps } from "../../types/Series";
import { TSinglePersonProps } from "../../types/Peoples";

//services
import { getSearchList } from "../../services/list";

//context
import { useSearchContext } from "../providers/providers";

//components
import SearchItemCard from "../../components/cards/searchItemCard";


export default function SearchPage() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TSingleMovieProps[] | TSingleSerieProps[] | TSinglePersonProps[] | null>(null);

    const [inputData, setInputData] = useSearchContext();

    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getSearchList(inputData);
                setData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single movie data');
            }
        };
        fetchData();
    }, [inputData]);

    if (isLoading) {
        return (
            <div>
                SKELETON HERE
            </div>
        )
    };


    if (data !== null && !isLoading) {
        return (
            <main className="min-h-screen w-screen max-w-[1024px] grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 px-6 md:px-12 pb-8">
                {
                    data.map(i => <SearchItemCard {...i} key={i.id} />)
                }
            </main>
        )
    }
};
