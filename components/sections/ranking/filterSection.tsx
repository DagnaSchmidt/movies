//components
import Chip from "../../buttons/chip";
import BodyText from "../../texts/bodyText";

//types
import { TFilterProps } from "../../../types/Filter";

//data
import { genresData } from "../../../data/genresData.js";

interface IFilterSection {
    filterData: TFilterProps,
    setFilterData: Function
}

export default function FilterSection(props: IFilterSection) {
    const { filterData, setFilterData } = props;

    const handleGenres = () => {

    }

    return (
        <section className="w-full flex flex-col gap-4 md:gap-2">

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="w-20">
                    <BodyText text="Type" />
                </div>
                <div className="flex gap-2">
                    <Chip
                        text="Movies"
                        active={filterData.type === "movies" ? true : false}
                        handleClick={() => setFilterData({ ...filterData, type: "movies" })}
                    />
                    <Chip
                        text="Series"
                        active={filterData.type === "series" ? true : false}
                        handleClick={() => setFilterData({ ...filterData, type: "series" })}
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="w-20">
                    <BodyText text="Genres" />
                </div>

                <div className="flex gap-2">
                    {
                        genresData.map((i) => {
                            return (
                                <Chip text={i.name} active={filterData.genres.includes(i.id)} handleClick={() => handleGenres()} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="w-20">
                    <BodyText text="Country" />
                </div>

                <div className="flex gap-2">
                    <Chip text="Movies" active={false} handleClick={() => setFilterData()} />
                    <Chip text="Series" active={false} handleClick={() => setFilterData()} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="w-20">
                    <BodyText text="Year" />
                </div>

                <div className="flex gap-2">
                    <Chip text="Movies" active={false} handleClick={() => setFilterData()} />
                    <Chip text="Series" active={false} handleClick={() => setFilterData()} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="w-20">
                    <BodyText text="VOD" />
                </div>

                <div className="flex gap-2">
                    <Chip text="Movies" active={false} handleClick={() => setFilterData()} />
                    <Chip text="Series" active={false} handleClick={() => setFilterData()} />
                </div>
            </div>

        </section>
    )
};
