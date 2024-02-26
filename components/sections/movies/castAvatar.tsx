import Link from "next/link";
import Image from "next/image";

//types
import { TCastProps } from "../../../types/Peoples";

export default function CastAvatar(props: TCastProps) {
    const { name, character, profile_path, id } = props;

    return (
        <Link href={`/character/${id}`}>
            <div className="flex flex-col items-center w-28 gap-2">
                <Image
                    src={`https://image.tmdb.org/t/p/original${profile_path}`}
                    alt=''
                    height={80}
                    width={80}
                    className="rounded-full h-20 w-20 object-fill"
                />
                <div className="flex flex-col items-center">
                    <p className="text-white text-sm">{name}</p>
                    <p className="text-white text-xs font-light">as</p>
                    <p className="text-white text-sm">{character}</p>
                </div>
            </div>
        </Link>
    )
};
