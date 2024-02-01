"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

//components
import Icon from '../../icons/icon';

type IconName = 'Home' | 'CameraLens' | 'VideoLine' | 'BookmarkLine' | 'ChartBoxLine';
type NavTitle = 'home' | 'movies' | 'series' | 'ranking' | 'list';
type Path = '/' | '/movies' | '/series' | '/ranking' | '/list';

interface IBottomNavItemProps {
    navIcon: IconName,
    navTitle: NavTitle,
    path: Path
};

export default function BottomNavItem(props: IBottomNavItemProps) {
    const { navIcon, navTitle, path } = props;
    const pathname = usePathname();

    return (
        <Link className={`flex flex-col gap-1 items-center ${path === pathname ? 'text-primary' : 'text-white'}`} href={path}>
            <Icon name={navIcon} fill={path === pathname ? 'fill-primary' : 'fill-white'} />
            <p className="text-xs">{navTitle}</p>
        </Link>
    )
};
