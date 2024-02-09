import { RiInstagramLine, RiFacebookCircleLine, RiTwitterLine, RiTiktokLine } from "react-icons/ri";

type IconName = 'instagram' | 'facebook' | 'twitter' | 'tiktok';

interface ISocialMediaProps {
    name: IconName
};

export default function SocialMediaIcon(props: ISocialMediaProps) {
    const { name } = props;
    const style = `hover:cursor-pointer hover:opacity-80 w-7 h-auto max-h-8 ${name === 'instagram' ? 'fill-instagram' : name === 'facebook' ? 'fill-facebook' : name === 'twitter' ? 'fill-twitter' : 'fill-tiktok'}`;

    switch (name) {
        case 'instagram':
            return <RiInstagramLine className={style} />
        case 'facebook':
            return <RiFacebookCircleLine className={style} />
        case 'twitter':
            return <RiTwitterLine className={style} />
        case 'tiktok':
            return <RiTiktokLine className={style} />
        default:
            return <RiInstagramLine className={style} />
    }

};
