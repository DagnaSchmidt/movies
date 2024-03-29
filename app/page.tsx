"use client"

//components
import ArticlesSection from "../components/sections/home/articlesSection";
import CarouselSection from "../components/sections/carouselSection";


export default function Home() {

    // const date = new Date('February 05, 2024 14:45:00').toISOString();
    // console.log(date);

    return (
        <main className="flex min-h-screen w-screen max-w-[1024px] flex-col gap-10 items-center md:px-12 bg-black relative">
            <ArticlesSection />

            <CarouselSection type='movie' category="popular" />

            <CarouselSection type='tv' category="top_rated" />

            <CarouselSection type='movie' category="upcoming" />

            {/* PICKS FOR YOU */}

            {/* MOST POPULAR MOVIE ROLES */}

        </main>
    );
}
