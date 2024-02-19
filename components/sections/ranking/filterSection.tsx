"use client"
import { useState } from "react";

//components
import Chip from "../../buttons/chip";
import BodyText from "../../texts/bodyText";
import SmallLinkButton from "../../buttons/smallLinkButton";

//types
import { TFilterProps, TFilterPropsEdited } from "../../../types/Filter";

//data
import { genresData } from "../../../data/genresData.js";
import Years from "./years";

//services
import { getDiscoverMovie, getDiscoverSerie } from "../../../services/discover";

interface IFilterSection {
    setDisplayData: Function,
    setIsLoading: Function
}


export default function FilterSection(props: IFilterSection) {
    const { setDisplayData, setIsLoading } = props;

    const [filterData, setFilterData] = useState<TFilterProps>({
        type: "movies",
        genres: null,
        year: null,
        VOD: null
    });

    const handleUpdateGenres = () => {

    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('submitted!');

        const editedFilterData: TFilterPropsEdited = {
            genres: null,
            year: filterData.year,
            VOD: null
        }

        if (filterData.type === "movies") {
            try {
                const newData = await getDiscoverMovie(editedFilterData);
                setDisplayData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single movie data');
            }
        } else {
            try {
                const newData = await getDiscoverSerie(editedFilterData);
                setDisplayData(newData);
                setIsLoading(false);
            } catch (error) {
                console.log('error on fetching single movie data');
            }
        }
    }

    return (
        <form className="w-full flex flex-col gap-4 md:gap-2" onSubmit={handleSubmit}>

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
                                <Chip
                                    text={i.name}
                                    active={filterData.genres === null ? false : filterData.genres.includes(i.id)}
                                    handleClick={() => handleUpdateGenres()}
                                    key={i.id}
                                />
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="w-20">
                    <BodyText text="Year" />
                </div>

                <div className="flex gap-2">
                    <Years filterData={filterData} setFilterData={setFilterData} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="w-20">
                    <BodyText text="VOD" />
                </div>

                <div className="flex gap-2">
                    <Chip text="Movies" active={false} handleClick={() => setFilterData({ ...filterData })} />
                    <Chip text="Series" active={false} handleClick={() => setFilterData({ ...filterData })} />
                </div>
            </div>

            <SmallLinkButton text="filter" disabled={false} handleClick={() => console.log('clicked')} />

        </form>
    )
};
