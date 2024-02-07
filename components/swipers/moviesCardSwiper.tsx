export default function MoviesCardSwiper(children: JSX.Element) {
    return (
        <div className="px-4 w-full overflow-x-scroll scrollbar-hide flex gap-3">
            {children}
        </div>
    )
};
