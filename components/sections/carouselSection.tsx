"use client"
import { useEffect, useState } from "react";


//types
import { TListProps } from "../../types/List";

//components
import SmallLinkButton from "../buttons/smallLinkButton";
import MovieCard from "../cards/movieCard";
import MoviesCardSwiper from "../swipers/moviesCardSwiper";

//actions
import { getList } from "../../services/list";
import MovieCardSkeleton from "../cards/movieCardSkeleton";


export default function CarouselSection(props: TListProps) {
    const { category } = props;

    const skeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [data, setData] = useState<object[] | null>(null);
    console.log(data);
    const [isLoading, setIsLoading] = useState(true);
    console.log(data !== null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getList(props);
                setData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error');
            }
        }
        fetchData();
    }, []);

    const handleClick = () => { }

    return (
        <section className="w-full flex flex-col gap-2">
            <div className="flex w-full justify-between px-6 md:px-0">
                <h5 className="text-white font-bold text-xl">
                    {
                        category === 'popular' ?
                            'Featured today' :
                            category === 'upcoming' ?
                                'Upcoming soon' :
                                category === 'top_rated' ?
                                    'Top 10' : 'Airing today'
                    }
                </h5>
                <SmallLinkButton text='Show more' disabled={false} handleClick={handleClick} />
            </div>
            <MoviesCardSwiper>
                {
                    // @ts-ignore: Unreachable code error
                    (isLoading && data === null) ? skeleton.map((i, index) => <MovieCardSkeleton key={index} />) : data.map((i, index) => <MovieCard {...i} key={index} />)
                }
            </MoviesCardSwiper>
        </section>
    )
};
