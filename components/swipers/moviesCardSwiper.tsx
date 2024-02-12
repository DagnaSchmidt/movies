import { ReactNode, useRef, useState } from "react";

//components
import SwiperButton from "../buttons/swiperButton";

//hooks
import useDeviceWidth from "../../hooks/useDeviceWidth";

interface IMoviesCardSwiperProps {
    children: ReactNode
};


const MoviesCardSwiper: React.FC<IMoviesCardSwiperProps> = ({ children }) => {
    const deviceWidth = useDeviceWidth();
    const elementRef = useRef<HTMLDivElement>(null);

    const [isArrowDisabled, setIsArrowDisabled] = useState(false);
    const [scrollAmount, setScrollAmount] = useState(0);

    const handleScroll = (step: 'left' | 'right') => {
        if (step === 'left') {
            elementRef.current.scrollTo({
                left: -688,
                behavior: "smooth"
            });
            setScrollAmount(scrollAmount - 688);
            setIsArrowDisabled(false);
        } else {
            elementRef.current.scrollTo({
                left: +688,
                behavior: "smooth"
            });
            setScrollAmount(scrollAmount + 688);
            setIsArrowDisabled(true);
        }
    };

    return (
        <div className="w-full h-48 px-4 md:px-0 relative" >
            {
                deviceWidth > 767 &&
                <div className="absolute top-20 left-0 z-40">
                    <SwiperButton direction="prev" disabled={scrollAmount === 0 ? true : false} handleClick={() => handleScroll('left')} />
                </div>
            }

            <div className="flex gap-3 overflow-x-scroll scrollbar-hide w-full h-48" ref={elementRef}>
                {children}
            </div>

            {
                deviceWidth > 767 &&
                <div className="absolute top-20 right-0 z-40">
                    <SwiperButton direction="next" disabled={isArrowDisabled} handleClick={() => handleScroll('right')} />
                </div>
            }
        </div>
    )
};

export default MoviesCardSwiper;
