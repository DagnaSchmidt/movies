import Link from "next/link";
import Image from "next/image";

//types
import { TSingleMovieProps } from "../../types/Movies";
import { TSingleSerieProps } from "../../types/Series";
import { TSinglePersonProps } from "../../types/Peoples";

export default function SearchItemCard(props: TSingleMovieProps | TSingleSerieProps | TSinglePersonProps) {

    return (
        <Link href={'title' in props ? `/movies/${props.id}` : `/series/${props.id}`} >
            <div className="w-full bg-light rounded-lg h-48">
                <Image
                    src={`https://image.tmdb.org/t/p/original${'poster_path' in props ? props.poster_path : props.profile_path}`}
                    alt=""
                    width={128}
                    height={192}
                    className="object-cover rounded-lg"
                    priority
                />
            </div>
        </Link>
    )
};
