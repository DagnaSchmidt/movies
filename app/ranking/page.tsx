"use client"
import { useEffect, useState } from "react";

//types
import { TSingleMovieProps } from "../../types/Movies";
import { TSingleSerieProps } from "../../types/Series";

//components
import FilterSection from "../../components/sections/ranking/filterSection";
import SearchItemCard from "../../components/cards/searchItemCard";

//services
import { getDiscoverMovieWithoutFilters } from "../../services/discover";


export default function Page() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [displayData, setDisplayData] = useState<TSingleMovieProps[] | TSingleSerieProps[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getDiscoverMovieWithoutFilters();
                setDisplayData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single movie data');
            }
        };
        fetchData();
    }, []);


    return (
        <main className="flex h-full w-screen max-w-[1024px] flex-col gap-10 items-center md:px-12 bg-black relative">
            <FilterSection setIsLoading={setIsLoading} setDisplayData={setDisplayData} />
            {
                isLoading ?
                    <div>
                        skeleton here
                    </div>
                    : displayData !== null &&
                    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 px-6 md:px-0">
                        {
                            displayData.map(i => <SearchItemCard {...i} key={i.id} />)
                        }
                    </section>
            }
        </main>
    )
};
