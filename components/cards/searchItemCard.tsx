import Link from "next/link";
import Image from "next/image";

//types
import { TSingleMovieProps } from "../../types/Movies";
import { TSingleSerieProps } from "../../types/Series";
import { TSinglePersonProps } from "../../types/Peoples";
import H3 from "../texts/h3";
import BodyText from "../texts/bodyText";

export default function SearchItemCard(props: TSingleMovieProps | TSingleSerieProps | TSinglePersonProps) {

    return (
        <Link href={'title' in props ? `/movies/${props.id}` : `/series/${props.id}`} >
            <div className="w-full bg-light rounded-lg h-28 flex gap-1">
                <Image
                    src={`https://image.tmdb.org/t/p/original${'poster_path' in props ? props.poster_path : props.profile_path}`}
                    alt=""
                    width={80}
                    height={112}
                    className="object-cover rounded-lg"
                    priority
                />
                <div className="flex flex-col justify-between px-3 py-2 w-full">
                    <H3 title={'title' in props ? props.title : props.name} />
                    <div className="flex justify-between w-full">
                        <BodyText text={'title' in props ? 'movie' : 'first_air_date' in props ? 'tv serie' : 'actor'} />
                        <div>
                            <BodyText text={'title' in props ? props.release_date.slice(0, 4) : 'first_air_date' in props ? props.first_air_date.slice(0, 4) : ''} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
};
