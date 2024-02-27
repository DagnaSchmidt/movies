import Image from "next/image";

//types
import { TSingleMovieProps } from "../../../types/Movies";
import { TSingleSerieProps } from "../../../types/Series";

//hooks
import useTime from "../../../hooks/useTime";
import { useEffect, useState } from "react";

export default function SingleMovieHeader(props: TSingleMovieProps | TSingleSerieProps) {
    const { poster_path, backdrop_path } = props;

    const [time, setTime] = useState<string>('');

    useEffect(() => {
        if ('runtime' in props) {
            setTime(useTime(props.runtime));
        }
        if ('episode_run_time' in props) {
            setTime(useTime(props.episode_run_time[0]));
        }
    }, []);


    return (
        <div className="w-full h-80 md:h-96 relative">
            <div className="w-full h-64 md:h-80 relative">
                <Image
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt=''
                    fill
                    sizes="(max-width: 768px) 100vw, (min-width: 767px) 100%"
                    className="object-cover"
                />
            </div>
            <div className="absolute bottom-0 h-28 w-full px-4">
                <div className="bg-light rounded-lg flex">
                    <Image
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt=''
                        height={112}
                        width={80}
                        className="rounded-lg"
                    />
                    <div className="self-end px-3 py-2 flex justify-between w-full items-end">
                        <h5 className="text-xl font-bold text-white tracking-wide">
                            {'title' in props ? props.title : props.name}
                        </h5>
                        <div className="flex flex-col items-end opacity-80">
                            <p className="text-white text-sm font-medium">
                                {time}
                            </p>
                            <p className="text-white text-sm font-medium">
                                {'release_date' in props ? props.release_date.slice(0, 4) : props.first_air_date.slice(0, 4)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
