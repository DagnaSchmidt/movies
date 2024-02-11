"use client"
import { useState } from "react";
import Link from "next/link";

//components
import Icon from "../../icons/icon";

export default function UserProfileAvatar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    if (!isLoggedIn) {
        return (
            <div className="flex flex-col gap-1 justify-center items-center hover:cursor-pointer">
                <Icon name='User' fill='fill-white' />
                <p className="text-xs text-white">login</p>
            </div>
        )
    } else {
        return (
            <div className="flex gap-2 justify-end items-center">
                <Link href="/profile/messages">
                    {/* envelop icon here */}
                </Link>
                <Link href="/profile/notifications">
                    {/* notifications icon here */}
                </Link>
                <Link href="/profile" className="h-11 w-11 rounded-full bg-primary">
                    {/* user avatar image here */}
                </Link>
            </div>

        )
    }
};
