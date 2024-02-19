//types
import { TFilterProps } from "../../../types/Filter"

//components
import Chip from "../../buttons/chip"

interface IYearsProps {
    filterData: TFilterProps,
    setFilterData: Function
};

export default function Years(props: IYearsProps) {
    const { filterData, setFilterData } = props;

    const yearsData = [2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016];

    return (
        <div className="flex gap-2">
            {
                yearsData.map((i) => {
                    return (
                        <Chip
                            text={i.toString()}
                            active={filterData.year === i}
                            handleClick={() => setFilterData({ ...filterData, year: i })}
                            key={i}
                        />
                    )
                })
            }
        </div>
    )
};
