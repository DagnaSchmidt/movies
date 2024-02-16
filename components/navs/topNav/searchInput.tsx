"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation';

import { useSearchContext } from "../../../app/providers/providers";

import { RiSearchLine } from "react-icons/ri";

export default function SearchInput() {
    const router = useRouter();
    const pathname = usePathname();

    const [isHidden, setIsHidden] = useState<boolean>(true);
    const [inputData, setInputData] = useSearchContext();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        setInputData(newValue);

        if (newValue.length !== 0 && pathname !== '/search') {
            router.push('/search');
        } else if (newValue.length === 0 && pathname === '/search') {
            router.back();
        }
    }

    return (
        <div className="w-full max-w-[640px] h-11 relative">
            {
                !isHidden &&
                <input
                    className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                    placeholder="search..."
                    type="text"
                    onChange={handleChange}
                    value={inputData}
                />
            }
            <RiSearchLine
                className="absolute right-3 top-3 fill-primary hover:cursor-pointer"
                onClick={() => setIsHidden(!isHidden)}
            />
        </div>
    )
};
