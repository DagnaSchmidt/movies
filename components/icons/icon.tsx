import { RiCameraLensLine, RiHomeLine, RiVideoLine, RiBookmarkLine, RiBarChartBoxLine } from "react-icons/ri";

type IconName = 'Home' | 'CameraLens' | 'VideoLine' | 'BookmarkLine' | 'ChartBoxLine';
type IconFill = 'fill-primary' | 'fill-white';

interface IIconProps {
    name: IconName,
    fill: IconFill
};

export default function Icon(props: IIconProps) {
    const { name, fill } = props;
    const style = `w-5 h-auto max-h-5 text-white ${fill}`;

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
        default:
            return <RiHomeLine className={style} />
    }
};
