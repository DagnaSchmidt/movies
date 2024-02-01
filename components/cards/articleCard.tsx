import Image from "next/image";

export default function ArticleCard() {
    return (
        <div className="w-screen h-64 relative">
            <Image
                alt="article"
                src="/article.svg"
                fill
                className="object-cover"
            />
            <div className="absolute w-full px-4 py-2 bottom-0 bg-light">
                <h5>Elizabeth as Princess Diana </h5>
                {/* button here */}
            </div>
        </div>
    )
};
