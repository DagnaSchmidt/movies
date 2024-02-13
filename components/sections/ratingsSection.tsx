import AddToList from "../rates/addToList"
import Rate from "../rates/rate"
import RateSystem from "../rates/rateSystem"

interface IRatingSectionProps {
    id: number,
    type: 'movies' | 'series'
};

export default function RatingsSection(props: IRatingSectionProps) {

    return (
        <section className="w-full flex justify-between px-6 items-end">
            <Rate />
            <RateSystem {...props} />
            <AddToList {...props} />
        </section>
    )
};
