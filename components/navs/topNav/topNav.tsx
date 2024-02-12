import Image from "next/image";

//components
import SearchInput from "./searchInput";
import UserProfileAvatar from "./userProfileAvatar";
import Link from "next/link";

export default function TopNav() {
    return (
        <div className="sticky z-50 top-0 max-w-[1024px] right-0 left-0 m-auto h-20 w-full py-4 px-6 md:px-12 bg-black flex justify-between">
            <Link href="/">
                <Image
                    src="/movies4you_logo.svg"
                    alt="movies4you logo"
                    className="hover:cursor-pointer"
                    height={36}
                    width={36}
                />
            </Link>

            <div className="flex items-center gap-3">
                <SearchInput />
                <UserProfileAvatar />
            </div>
        </div>
    )
};
