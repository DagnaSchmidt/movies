import Rate from "../rates/rate"

interface IRatingSectionProps {
    type: 'movies' | 'series'
};

export default function RatingsSection(props: IRatingSectionProps) {
    return (
        <section className="w-full flex justify-between px-6">
            <Rate />
        </section>
    )
};
