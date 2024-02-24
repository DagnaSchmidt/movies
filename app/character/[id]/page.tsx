"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

//types
import { TSinglePersonProps } from "../../../types/Peoples";

//services
import { getSingleCharacter, getSingleCharacterImages } from "../../../services/characters";

export default function Page({ params }: { params: { id: number } }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TSinglePersonProps | null>(null);
    const [images, setImages] = useState(null);
    console.log(images);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getSingleCharacter(params.id);
                const newImages = await getSingleCharacterImages(params.id);
                setData(newData);
                setImages(newImages);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single character data');
            }
        };
        fetchData();
    }, []);

    if (isLoading) {
        return (
            <div>
                SKELETON HERE
            </div>
        )
    };

    if (data !== null && !isLoading) {
        return (
            <main className="min-h-screen w-screen max-w-[1024px] flex flex-col items-center md:px-12 gap-7 pb-8">
                <Image
                    src={`https://image.tmdb.org/t/p/original${images[4].file_path}`}
                    alt=''
                    height={120}
                    width={80}
                    className="rounded-lg object-fill"
                />
                MAIN
                <p className="text-white text-xl">{data.name}</p>
            </main>
        )
    }
};
