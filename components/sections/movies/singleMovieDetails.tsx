//components
import H3 from "../../texts/h3";
import SingleMovieDetailsListItem from "./singleMovieDetailsListItem";

//types
import { TSingleMovieProps } from "../../../types/Movies";


export default function SingleMovieDetails(props: TSingleMovieProps) {
    const { release_date, original_language, original_title } = props;

    const data = [
        {
            border: true,
            title: 'Original title:',
            text: original_title
        },
        {
            border: true,
            title: 'Release date:',
            text: release_date
        },
        {
            border: false,
            title: 'Original language:',
            text: original_language
        }
    ];

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
};
