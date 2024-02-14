interface IH3Props {
    title: string
};

export default function H3(props: IH3Props) {
    const { title } = props;

    return (
        <h5 className="text-white font-bold text-xl">{title}</h5>
    )
};
