"use client"
import SmallButton from "../components/buttons/smallButton";
import SmallLinkButton from "../components/buttons/smallLinkButton";
import ArticleCard from "../components/cards/articleCard";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
            <ArticleCard />

            <SmallLinkButton text="Show more" handleClick={() => console.log('clicked')} disabled={false} />
        </main>
    );
}
