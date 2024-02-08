"use client"
import Image from "next/image";

//components
import SmallButton from "../buttons/smallButton";


export default function ArticleCard() {
    return (
        <div className="w-full max-w-[1024px] h-64 md:h-96 relative">
            <Image
                alt="article"
                src="/article.svg"
                fill
                className="object-cover"
            />
            <div className="absolute flex justify-between gap-8 items-center w-full min-h-16 px-4 py-2 bottom-0 bg-light">
                <h5 className="text-black font-bold italic text-xl">Elizabeth Debicki as Princess Diana </h5>
                <SmallButton title={true} text="read more" icon={true} disabled={false} handleClick={() => console.log('clicked')} />
            </div>
        </div>
    )
};
