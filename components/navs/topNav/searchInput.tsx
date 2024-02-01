"use client"
import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchInput() {
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="w-full max-w-[640px] h-11 relative">
            {
                !isHidden &&
                <input
                    className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                    placeholder="search..."
                />
            }
            <RiSearchLine
                className="absolute right-3 top-3 fill-primary hover:cursor-pointer"
                onClick={() => setIsHidden(!isHidden)}
            />
        </div>
    )
};
