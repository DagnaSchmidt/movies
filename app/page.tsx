"use client"

//components
import ArticleCard from "../components/cards/articleCard";
import ArticleCardSmall from "../components/cards/articleCardSmall";
import MovieCard from "../components/cards/movieCard";
import ArticlesSection from "../components/sections/home/articlesSection";

//services
import { checkAuth } from "../services/movies";

export default function Home() {

    const data = {
        title: "Arcane",
        image: "img",
        alt: "alt text",
        id: 'id1'
    }

    return (
        <main className="flex min-h-screen w-screen max-w-[1024px] flex-col items-center pt-24 md:px-12 bg-black">
            <ArticlesSection />

            <section>
                <MovieCard {...data} />
            </section>

        </main>
    );
}
