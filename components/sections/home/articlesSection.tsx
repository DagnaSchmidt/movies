//components
import ArticleCard from "../../cards/articleCard"
import ArticleCardSmall from "../../cards/articleCardSmall"

export default function ArticlesSection() {
    return (
        <section className="w-full flex flex-col gap-6">
            <ArticleCard />
            <div className="flex flex-col md:flex-row gap-6 w-full px-6 md:px-0">
                <ArticleCardSmall id={119051} image="/iHSwvRVsRyxpX7FE7GbviaDvgGZ.jpg" title="The fruit of Tim Burton's imagination" alt="text" />
                <ArticleCardSmall id={46648} image="/siA2d4PNn4JVFZAwfIYx4pnKCaK.jpg" title={`The new "True Detective" is breaking popularity records`} alt="text" />
            </div>
        </section>
    )
};
