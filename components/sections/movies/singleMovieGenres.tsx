//components
import H3 from "../../texts/h3";

//types
import { TGenreProps } from "../../../types/Shared";
import Chip from "../../buttons/chip";

interface ISingleMovieGenres {
    data: TGenreProps[]
};


export default function SingleMovieGenres(props: ISingleMovieGenres) {
    const { data } = props;

    return (
        <section className="w-full flex flex-col gap-4 px-4 md:px-0">
            <H3 title="Genres" />
            <div className="flex flex-wrap gap-4">
                {
                    data.map(i => <Chip text={i.name} key={i.id} active={false} handleClick={() => console.log('')} />)
                }
            </div>
        </section>
    )
};
