"use client"
import { useState } from "react";

//components
import Chip from "../../buttons/chip";
import BodyText from "../../texts/bodyText";
import SmallLinkButton from "../../buttons/smallLinkButton";
import Years from "./years";
import Genres from "./genres";

//types
import { TFilterProps, TFilterPropsEdited } from "../../../types/Filter";

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const editGenres = (genres: null | number[]): null | string => {
            if (genres === null) {
                return null;
            } else {
                let result = '';
                for (let i = 0; i < genres.length; i++) {
                    if (i === 0) {
                        result = genres[i].toString();
                    } else {
                        result = result + '%2C%20' + genres[i].toString();
                    }
                }
                return result;
            }
        }

        const editedFilterData: TFilterPropsEdited = {
            genres: editGenres(filterData.genres),
            year: filterData.year,
            VOD: null
        };

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

    };


    return (
        <form className="w-full flex flex-col gap-4 md:gap-2 md:px-0" onSubmit={handleSubmit}>

            <div className="flex flex-col md:flex-row md:items-center gap-2 px-4 md:px-0">
                <div className="w-16">
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

            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="w-16 pl-4 md:pl-0">
                    <BodyText text="Genres" />
                </div>
                <Genres filterData={filterData} setFilterData={setFilterData} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="w-16 pl-4 md:pl-0">
                    <BodyText text="Year" />
                </div>
                <Years filterData={filterData} setFilterData={setFilterData} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="w-16 pl-4 md:pl-0">
                    <BodyText text="VOD" />
                </div>

                <div className="flex gap-2 pl-4">
                    <Chip text="Movies" active={false} handleClick={() => setFilterData({ ...filterData })} />
                    <Chip text="Series" active={false} handleClick={() => setFilterData({ ...filterData })} />
                </div>
            </div>

            <div className="self-end">
                <SmallLinkButton text="reset filters" disabled={false} handleClick={() => setFilterData({ type: "movies", genres: null, year: null, VOD: null })} />
            </div>

        </form>
    )
};
