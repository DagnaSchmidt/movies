import { ReactNode } from "react";

//components
import SwiperButton from "../buttons/swiperButton";

interface IMoviesCardSwiperProps {
    children: ReactNode
};


const MoviesCardSwiper: React.FC<IMoviesCardSwiperProps> = ({ children }) => {
    return (
        <div className="w-full h-48 px-4 md:px-0 overflow-x-scroll scrollbar-hide flex gap-3 relative">
            <div className="absolute top-20 left-0 z-40">
                <SwiperButton direction="prev" disabled={false} handleClick={() => console.log("prev")} />
            </div>
            {children}
            <div className="absolute top-20 right-0 z-40">
                <SwiperButton direction="next" disabled={false} handleClick={() => console.log("next")} />
            </div>
        </div>
    )
};

export default MoviesCardSwiper;
