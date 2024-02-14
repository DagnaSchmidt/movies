interface ITextSectionProps {
    title: string,
    text: string
};

export default function TextSection(props: ITextSectionProps) {
    const { title, text } = props;
    return (
        <section className="flex flex-col px-4 gap-4 pt-6">
            <h5 className="text-white font-bold text-xl">{title}</h5>
            <p className="text-white text-base font-regular">{text}</p>
        </section>
    )
};
