"use client"
import Image from "next/image";
import SmallButton from "../buttons/smallButton";

interface IArticleCardSmallProps {
    image: string,
    alt: string,
    title: string
}

export default function ArticleCardSmall(props: IArticleCardSmallProps) {
    const { image, alt, title } = props;

    return (
        <div className="w-full max-w-[1024px] h-40 md:h-40 relative">
            <Image
                alt={alt}
                src="/wednesday.svg"
                fill
                className="object-cover"
            />
            <div className="absolute flex justify-between gap-8 items-center w-full min-h-16 px-4 py-2 bottom-0 bg-linear">
                <h5 className="text-black font-bold italic text-sm">{title}</h5>
                <SmallButton text="" icon={true} disabled={false} handleClick={() => console.log('clicked')} />
            </div>
        </div>
    )
}
