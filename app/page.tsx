"use client"

import CarouselSection from "../components/sections/carouselSection";
//components
import ArticlesSection from "../components/sections/home/articlesSection";


export default function Home() {

    const data = {
        title: "Arcane",
        image: "img",
        alt: "alt text",
        id: 'id1'
    }

    return (
        <main className="flex min-h-screen w-screen max-w-[1024px] flex-col gap-10 items-center pt-24 md:px-12 bg-black">
            <ArticlesSection />

            <CarouselSection title='Featured today' category="movies" />

        </main>
    );
}
