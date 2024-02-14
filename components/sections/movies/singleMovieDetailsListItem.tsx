interface ISingleMovieDetailsListItem {
    title: string,
    text: string,
    border: boolean
};

export default function SingleMovieDetailsListItem(props: ISingleMovieDetailsListItem) {
    const { title, text, border } = props;

    return (
        <li className={`flex gap-4 w-full h-11 items-center ${border && 'border-b-[0.5px] border-primary'}`}>
            <p className="text-white font-sm font-regular">{title}</p>
            <p className="text-white font-sm font-light opacity-70">{text}</p>
        </li>
    )
};
