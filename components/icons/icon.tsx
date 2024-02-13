import {
    RiCameraLensLine,
    RiHomeLine,
    RiVideoLine,
    RiBookmarkLine,
    RiStarFill,
    RiStarLine,
    RiBarChartBoxLine,
    RiArrowRightSLine,
    RiArrowLeftSLine
} from "react-icons/ri";

import {
    MdOutlinePerson,
    MdAdd
} from "react-icons/md";

type IconName = 'Home' | 'CameraLens' | 'VideoLine' | 'BookmarkLine' | 'ChartBoxLine' | 'User' | 'Add' | 'ChevronRight' | 'ChevronLeft' | 'Star' | 'StarLine';
type IconFill = 'fill-primary' | 'fill-white' | 'fill-black' | 'fill-neutral300';

interface IIconProps {
    name: IconName,
    fill: IconFill
};

export default function Icon(props: IIconProps) {
    const { name, fill } = props;
    const style = `w-5 h-auto max-h-5 ${fill}`;

    switch (name) {
        case 'Home':
            return <RiHomeLine className={style} />
        case 'CameraLens':
            return <RiCameraLensLine className={style} />
        case 'VideoLine':
            return <RiVideoLine className={style} />
        case 'BookmarkLine':
            return <RiBookmarkLine className={style} />
        case 'ChartBoxLine':
            return <RiBarChartBoxLine className={style} />
        case 'User':
            return <MdOutlinePerson className={style} />
        case 'Add':
            return <MdAdd className={style} />
        case 'ChevronRight':
            return <RiArrowRightSLine className={style} />
        case 'ChevronLeft':
            return <RiArrowLeftSLine className={style} />
        case 'Star':
            return <RiStarFill className={style} />
        case 'StarLine':
            return <RiStarLine className={style} />
        default:
            return <RiHomeLine className={style} />
    }
};
