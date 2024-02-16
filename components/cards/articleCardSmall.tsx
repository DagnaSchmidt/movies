"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

//components
import SmallButton from "../buttons/smallButton";

interface IArticleCardSmallProps {
    image: string,
    alt: string,
    title: string,
    id: number
};

export default function ArticleCardSmall(props: IArticleCardSmallProps) {
    const router = useRouter();
    const { image, alt, title, id } = props;

    const articleRoute = `/articles/${id}`;


    return (
        <div className="w-full max-w-[1024px] h-40 md:h-40 relative">
            <Image
                alt={alt}
                src={`https://image.tmdb.org/t/p/original${image}`}
                fill
                className="object-cover"
            />
            <div className="absolute flex justify-between gap-8 items-center w-full min-h-12 px-2 py-1 bottom-0 bg-light">
                <h5 className="text-black font-bold italic text-sm">{title}</h5>
                <SmallButton title={false} text="" icon={true} disabled={false} handleClick={() => router.push(articleRoute)} />
            </div>
        </div>
    )
}
