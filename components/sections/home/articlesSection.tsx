//components
import ArticleCard from "../../cards/articleCard"
import ArticleCardSmall from "../../cards/articleCardSmall"

export default function ArticlesSection() {
    return (
        <section className="w-full flex flex-col gap-6">
            <ArticleCard />
            <div className="flex gap-6 w-full px-6 md:px-0">
                <ArticleCardSmall image="" title="The fruit of Tim Burton's imagination" alt="text" />
                <ArticleCardSmall image="" title="The fruit of Tim Burton's imagination" alt="text" />
            </div>
        </section>
    )
};
