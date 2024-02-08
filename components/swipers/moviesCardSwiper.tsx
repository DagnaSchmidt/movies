import { ReactNode } from "react";

interface IMoviesCardSwiperProps {
    children: ReactNode
};


const MoviesCardSwiper: React.FC<IMoviesCardSwiperProps> = ({ children }) => {
    return (
        <div className="w-full px-4 overflow-x-scroll scrollbar-hide flex gap-3">
            {children}
        </div>
    )
};

export default MoviesCardSwiper;
