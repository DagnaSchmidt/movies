"use client"
import { useEffect, useState } from "react";

//types
import { TFilterProps } from "../../types/Filter";
import { TSingleMovieProps } from "../../types/Movies";
import { TSingleSerieProps } from "../../types/Series";

//components
import FilterSection from "../../components/sections/ranking/filterSection";
import SearchItemCard from "../../components/cards/searchItemCard";

//services
import { getDiscoverMovieWithoutFilters } from "../../services/discover";

export default function RankingPage() {
    const [isLoading, setIsLoading] = useState<boolean>(true);

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

    const [filterData, setFilterData] = useState<TFilterProps>({
        type: "movies",
        genres: [],
        country: "",
        year: 0,
        VOD: []
    });

    const [displayData, setDisplayData] = useState<TSingleMovieProps[] | TSingleSerieProps[] | null>(null);

    return (
        <main className="flex h-full w-screen max-w-[1024px] flex-col gap-10 items-center md:px-12 bg-black relative">
            <form className="w-full">
                <FilterSection filterData={filterData} setFilterData={setFilterData} />
            </form>

            {
                isLoading ?
                    <div>
                        skeleton here
                    </div>
                    : displayData !== null &&
                    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4">
                        {
                            displayData.map(i => <SearchItemCard {...i} key={i.id} />)
                        }
                    </section>
            }

        </main>
    )
};
