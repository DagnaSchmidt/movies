"use client"

import SwiperButton from "../components/buttons/swiperButton";
import CarouselSection from "../components/sections/carouselSection";
//components
import ArticlesSection from "../components/sections/home/articlesSection";
import FollowUsSection from "../components/sections/home/followUsSection";


export default function Home() {

    const data = {
        title: "Arcane",
        image: "img",
        alt: "alt text",
        id: 'id1'
    }

    return (
        <main className="flex min-h-screen w-screen max-w-[1024px] flex-col gap-10 items-center md:px-12 bg-black relative">
            <ArticlesSection />

            <CarouselSection type='movie' category="popular" />

            <CarouselSection type='tv' category="top_rated" />

            <CarouselSection type='movie' category="upcoming" />

            <FollowUsSection />

        </main>
    );
}
