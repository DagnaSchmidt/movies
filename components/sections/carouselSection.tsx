import SmallLinkButton from "../buttons/smallLinkButton";
import MoviesCardSwiper from "../swipers/moviesCardSwiper";

type CarouselCategory = 'movies' | 'series' | 'list';


interface ICarouselSectionProps {
    title: string,
    category: CarouselCategory
};

export default function CarouselSection(props: ICarouselSectionProps) {
    const { title, category } = props;

    //temp data
    const data = [1, 2, 3, 4, 5, 6]
    const handleClick = () => { }
    const cards = data.map(i => <div>item</div>);

    return (
        <section className="w-full flex flex-col gap-2">
            <div className="flex w-full justify-between px-6 md:px-0">
                <h5 className="text-white font-bold text-xl">{title}</h5>
                <SmallLinkButton text='Show more' disabled={false} handleClick={handleClick} />
            </div>
            <MoviesCardSwiper>
                <div>item</div>
            </MoviesCardSwiper>
        </section>
    )
};
