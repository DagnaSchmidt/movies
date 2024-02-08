"use client"

//types
import { TListProps } from "../../types/List";

//components
import SmallLinkButton from "../buttons/smallLinkButton";
import MovieCard from "../cards/movieCard";
import MoviesCardSwiper from "../swipers/moviesCardSwiper";

//actions
import { getList } from "../../services/list";
import { useEffect, useState } from "react";


export default function CarouselSection(props: TListProps) {
    const { type, category } = props;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(data);


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


    //temp data
    const data2 = {
        title: 'Arcane',
        image: '',
        alt: 'alt',
        id: 'id1'
    };

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
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
                <MovieCard {...data2} />
            </MoviesCardSwiper>
        </section>
    )
};
