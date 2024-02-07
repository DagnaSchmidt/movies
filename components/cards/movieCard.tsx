import Image from "next/image";
import BookmarkIcon from "../icons/bookmarkIcon";

interface IMovieCardProps {
    title: string,
    image: string,
    alt: string,
    id: string
}



export default function MovieCard(props: IMovieCardProps) {
    const { title, image, alt, id } = props;

    return (
        <div className="w-32 h-48 relative rounded-lg group">
            <Image
                alt={alt}
                src="/wednesday.svg"
                fill
                className="object-cover rounded-lg"
            />
            <div className="absolute right-0 top-0">
                <BookmarkIcon id={id} />
            </div>
            <div className="absolute bottom-0 w-full h-8 bg-light flex justify-center items-center rounded-lg group-hover:opacity-90">
                <p className="text-sm font-semibold">{title}</p>
            </div>
        </div>
    )
};
