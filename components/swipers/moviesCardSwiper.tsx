export default function MoviesCardSwiper(props: { children: JSX.Element }) {
    const { children } = props;

    return (
        <div className="px-4 w-full overflow-x-scroll scrollbar-hide flex gap-3">
            {children}
        </div>
    )
};
