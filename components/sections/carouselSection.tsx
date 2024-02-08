"use client"

//components
import SmallLinkButton from "../buttons/smallLinkButton";
import MovieCard from "../cards/movieCard";
import MoviesCardSwiper from "../swipers/moviesCardSwiper";

//actions
import { getPopularMovies } from "../../services/movies";

interface ICarouselSectionProps {
    type: 'movies' | 'series'
    category: 'popular' | 'upcoming' | 'top' | 'airing'
};

export default async function CarouselSection(props: ICarouselSectionProps) {
    const { type, category } = props;

    // const moviesPopularData = await getPopularMovies();
    // console.log(moviesPopularData);

    //temp data
    const data2 = {
        title: 'Arcane',
        image: '',
        alt: 'alt',
        id: 'id1'
    };
    const data = [1, 2, 3, 4, 5, 6]
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
                                category === 'top' ?
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
