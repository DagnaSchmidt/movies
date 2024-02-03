"use client"
import SmallButton from "../components/buttons/smallButton";
import ArticleCard from "../components/cards/articleCard";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
            <ArticleCard />

            <SmallButton text="Read more" icon={true} disabled={false} handleClick={() => console.log('cliked')} />
        </main>
    );
}
