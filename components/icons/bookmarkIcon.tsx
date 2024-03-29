import { RiBookmarkFill, RiBookmarkLine } from "react-icons/ri";

interface IBookmarkIconProps {
    id: number
}

//temp data
const userList = [866398, 2, 3];
const addToUserList = () => { }
const removeFromUserList = () => { }

export default function BookmarkIcon(props: IBookmarkIconProps) {
    const { id } = props;

    if (userList.includes(id)) {
        return (
            <button
                className="w-11 h-11 flex justify-center items-center group"
                onClick={addToUserList}
            >
                <RiBookmarkFill className="fill-primary h-5 w-auto group-hover:opacity-90" />
            </button>
        )
    } else {
        return (
            <button
                className="w-11 h-11 flex justify-center items-center group"
                onClick={removeFromUserList}
            >
                <RiBookmarkLine className="fill-primary h-5 w-auto group-hover:opacity-90" />
            </button>
        )
    }
}
