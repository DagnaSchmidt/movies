"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

//types
import { TSinglePersonProps } from "../../../types/Peoples";

//components
import H2 from "../../texts/h2";

//services
import { getSingleCharacterTaggedImages } from "../../../services/characters";


export default function SingleCharacterHeader(props: TSinglePersonProps) {
    const { biography, birthday, deathday, name, profile_path, id, known_for_department } = props;

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [taggedImage, setTaggedImage] = useState<string | null>(null);
    console.log(taggedImage);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newImages = await getSingleCharacterTaggedImages(id);
                setTaggedImage(newImages[0].file_path);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single character tagged images data');
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

    if (taggedImage !== null && !isLoading) {
        return (
            <div className="w-full h-80 md:h-96 relative">
                <div className="w-full h-64 md:h-80 relative">
                    <Image
                        src={`https://image.tmdb.org/t/p/original${taggedImage}`}
                        alt=''
                        fill
                        sizes="(max-width: 768px) 100vw, (min-width: 767px) 100%"
                        className="object-cover"
                    />
                </div>
                <div className="absolute bottom-0 h-28 w-full px-4">
                    <div className="bg-light rounded-lg flex">
                        <Image
                            src={`https://image.tmdb.org/t/p/original${profile_path}`}
                            alt=''
                            height={112}
                            width={80}
                            className="rounded-lg"
                        />
                        <div className="self-end px-3 py-2 flex justify-between w-full items-end">
                            <h5 className="text-xl font-bold text-white tracking-wide">
                                {name}
                            </h5>
                            <div className="flex flex-col items-end opacity-80">
                                <p className="text-white text-sm font-medium">
                                    {known_for_department}
                                </p>
                                <p className="text-white text-sm font-medium">
                                    {birthday}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};
