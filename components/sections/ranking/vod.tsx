//components
import Chip from "../../buttons/chip";

//data
import { vodData } from "../../../data/vodData.js";

//types
import { TFilterProps } from "../../../types/Filter";

interface IVodProps {
    filterData: TFilterProps,
    setFilterData: Function
};

export default function Vod(props: IVodProps) {
    const { filterData, setFilterData } = props;

    const handleUpdateVod = (id: number) => {
        if (filterData.VOD === id) {
            setFilterData({ ...filterData, VOD: null });
        } else {
            setFilterData({ ...filterData, VOD: id });
        }
    };

    return (
        <div className="w-full overflow-x-scroll scroll-hidden">
            <div className="flex gap-2 md:flex-wrap px-4 md:px-0">
                {
                    vodData.map((i) => {
                        return (
                            <Chip
                                text={i.name}
                                active={filterData.VOD === null ? false : filterData.VOD === i.id ? true : false}
                                handleClick={() => handleUpdateVod(i.id)}
                                key={i.id}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
};
