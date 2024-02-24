"use client"
import { useState, useEffect } from "react";

//types
import { TSinglePersonProps } from "../../../types/Peoples";

//services
import { getSingleCharacter } from "../../../services/characters";

export default function Page({ params }: { params: { id: number } }) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [data, setData] = useState<TSinglePersonProps | null>(null);
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const newData = await getSingleCharacter(params.id);
                setData(newData);
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
            <main>
                MAIN
                <p className="text-white text-xl">{data.name}</p>
            </main>
        )
    }
};
