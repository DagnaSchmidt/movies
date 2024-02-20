//components
import Chip from "../../buttons/chip";

//data
import { movieGenresData, seriesGenresData } from "../../../data/genresData";

//types
import { TFilterProps } from "../../../types/Filter";

interface IGenresProps {
    filterData: TFilterProps,
    setFilterData: Function
};

export default function Genres(props: IGenresProps) {
    const { filterData, setFilterData } = props;

    const handleUpdateGenres = (id: number) => {
        if (filterData.genres === null) {
            const newGenres = [id];
            setFilterData({ ...filterData, genres: newGenres });
        } else if (filterData.genres.includes(id) === true) {
            const newGenres = filterData.genres.filter(i => i !== id);
            setFilterData({ ...filterData, genres: newGenres });
        } else {
            const newGenres = [...filterData.genres, id];
            setFilterData({ ...filterData, genres: newGenres });
        }
    };

    return (
        <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex gap-2 md:flex-wrap px-4 md:px-0">
                {
                    filterData.type === "movies" ?
                        movieGenresData.map((i) => {
                            return (
                                <Chip
                                    text={i.name}
                                    active={filterData.genres === null ? false : filterData.genres.includes(i.id) ? true : false}
                                    handleClick={() => handleUpdateGenres(i.id)}
                                    key={i.id}
                                />
                            )
                        })
                        :
                        seriesGenresData.map((i) => {
                            return (
                                <Chip
                                    text={i.name}
                                    active={filterData.genres === null ? false : filterData.genres.includes(i.id) ? true : false}
                                    handleClick={() => handleUpdateGenres(i.id)}
                                    key={i.id}
                                />
                            )
                        })
                }
            </div>
        </div>

    )
}
