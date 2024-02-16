interface IH2Props {
    title: string
};

export default function H2(props: IH2Props) {
    const { title } = props;

    return (
        <h2 className="text-white font-bold text-2xl">{title}</h2>
    )
};
