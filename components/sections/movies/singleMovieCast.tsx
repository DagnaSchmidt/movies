//components
import MoviesCardSwiper from "../../swipers/moviesCardSwiper";
import H3 from "../../texts/h3";
import SmallLinkButton from "../../buttons/smallLinkButton";

//types
import { TCastProps } from "../../../types/Peoples";
import CastAvatar from "./castAvatar";

interface ISingleMovieCast {
    cast: TCastProps[]
}

export default function SingleMovieCast(props: ISingleMovieCast) {
    const { cast } = props;

    const handleClick = () => {

    };

    return (
        <section className="w-full flex flex-col gap-2 md:pl-4">
            <div className="flex w-full justify-between px-4 md:px-0">
                <H3 title='Cast' />
                <SmallLinkButton text='Show more' disabled={false} handleClick={handleClick} />
            </div>
            <MoviesCardSwiper>
                {
                    cast.map(i => <CastAvatar {...i} key={i.id} />)
                }
            </MoviesCardSwiper>
        </section>
    )
};
