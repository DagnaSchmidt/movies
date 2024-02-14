"use client"
import CarouselSection from "../../components/sections/carouselSection";

export default function Page() {
    return (
        <main className="flex h-full w-screen max-w-[1024px] flex-col gap-10 items-center md:px-12 bg-black relative">

            <CarouselSection type='tv' category="popular" />

            <CarouselSection type='tv' category="top_rated" />

            <CarouselSection type='tv' category="on_the_air" />

            {/* PICKS FOR YOU */}

            {/* MOST POPULAR MOVIE ROLES */}

        </main>
    )
};
