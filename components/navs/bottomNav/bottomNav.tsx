"use client"
//components
import BottomNavItem from "./bottomNavItem";

//providers
import { useUserContext } from '../../../app/providers/providers';

export default function BottomNav() {
    const [user] = useUserContext();

    return (
        <nav className="sticky bottom-1 left-0 right-0 m-auto w-full px-4 max-w-[480px]">
            <div className="flex gap-9 justify-center items-center w-full h-14 bg-linear rounded-full">
                <BottomNavItem navIcon="Home" navTitle="home" path="/" />
                <BottomNavItem navIcon="CameraLens" navTitle="movies" path="/movies" />
                <BottomNavItem navIcon="VideoLine" navTitle="series" path="/series" />
                <BottomNavItem navIcon="ChartBoxLine" navTitle="ranking" path="/ranking" />
                {
                    user !== null &&
                    <BottomNavItem navIcon="BookmarkLine" navTitle="list" path="/list" />
                }
            </div>
        </nav>
    )
};
