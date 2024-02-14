"use client"
import CarouselSection from "../../components/sections/carouselSection";

export default function Page() {
    return (
        <main className="flex h-full w-screen max-w-[1024px] flex-col gap-10 items-center md:px-12 bg-black relative">

            <CarouselSection type='movie' category="popular" />

            <CarouselSection type='movie' category="top_rated" />

            <CarouselSection type='movie' category="upcoming" />

            {/* PICKS FOR YOU */}

            {/* MOST POPULAR MOVIE ROLES */}

        </main>
    )
};
