import Image from "next/image";

//components
import BookmarkIcon from "../icons/bookmarkIcon";

//types
import { TMovieCardProps } from "../../types/List";


export default function MovieCard(props: TMovieCardProps) {
    const { poster_path, id } = props;

    return (
        <div className="w-32 h-48">
            <div className="w-32 h-48 relative rounded-lg overflow-hidden group">
                <Image
                    alt={poster_path}
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    fill
                    className="object-cover rounded-lg"
                />
                <div className="absolute right-0 top-0">
                    <BookmarkIcon id={id} />
                </div>
                <div className="absolute bottom-0 w-32 h-8 bg-light flex justify-center items-center rounded-lg group-hover:opacity-90">
                    <p className="text-sm font-semibold">{'title' in props ? props.title : props.name}</p>
                </div>
            </div>
        </div>
    )
};
