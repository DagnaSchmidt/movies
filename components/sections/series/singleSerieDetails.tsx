//components
import H3 from "../../texts/h3";
import SingleMovieDetailsListItem from "../movies/singleMovieDetailsListItem";

//types
import { TSingleSerieProps } from "../../../types/Series";

export default function SingleSerieDetails(props: TSingleSerieProps) {
    const { original_name, number_of_seasons, number_of_episodes, status, first_air_date, last_air_date, original_language } = props;

    const data = [
        {
            border: true,
            title: 'Original title:',
            text: original_name
        },
        {
            border: true,
            title: 'Seasons:',
            text: number_of_seasons.toString()
        },
        {
            border: true,
            title: 'Episodes:',
            text: number_of_episodes.toString()
        },
        {
            border: true,
            title: 'First episode release date:',
            text: first_air_date
        },
        {
            border: true,
            title: 'Last episode release date:',
            text: last_air_date
        },
        {
            border: true,
            title: 'Original language:',
            text: original_language
        },
        {
            border: false,
            title: 'Status:',
            text: status ? 'ongoing' : 'ended'
        }
    ]

    return (
        <section className="w-full flex flex-col gap-4 px-4">
            <H3 title="Details" />
            <ul className="bg-extra-light pl-4 rounded-lg flex flex-col gap-2">
                {
                    data.map(i => <SingleMovieDetailsListItem {...i} key={i.title} />)
                }
            </ul>
        </section>
    )
}
