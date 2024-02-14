import BodyText from "../texts/bodyText";
import H3 from "../texts/h3";

interface ITextSectionProps {
    title: string,
    text: string
};

export default function TextSection(props: ITextSectionProps) {
    const { title, text } = props;
    return (
        <section className="flex flex-col px-4 gap-4 pt-6">
            <H3 title={title} />
            <BodyText text={text} />
        </section>
    )
};
