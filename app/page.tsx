"use client"
import ArticleCard from "../components/cards/articleCard";
import ArticleCardSmall from "../components/cards/articleCardSmall";

export default function Home() {

    return (
        <main className="flex min-h-screen w-screen max-w-[1024px] flex-col items-center pt-24 md:px-12 bg-black">
            <section className="w-full flex flex-col gap-6">
                <ArticleCard />
                <div className="flex gap-6 w-full px-6 md:px-0">
                    <ArticleCardSmall image="" title="The fruit of Tim Burton's imagination" alt="text" />
                    <ArticleCardSmall image="" title="The fruit of Tim Burton's imagination" alt="text" />
                </div>
            </section>

        </main>
    );
}
