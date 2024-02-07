"use client"

//components
import ArticleCard from "../components/cards/articleCard";
import ArticleCardSmall from "../components/cards/articleCardSmall";
import MovieCard from "../components/cards/movieCard";

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
            <section className="w-full flex flex-col gap-6">
                <ArticleCard />
                <div className="flex gap-6 w-full px-6 md:px-0">
                    <ArticleCardSmall image="" title="The fruit of Tim Burton's imagination" alt="text" />
                    <ArticleCardSmall image="" title="The fruit of Tim Burton's imagination" alt="text" />
                </div>
            </section>

            <section>
                <MovieCard {...data} />
            </section>

        </main>
    );
}
