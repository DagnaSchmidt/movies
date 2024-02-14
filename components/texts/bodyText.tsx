interface IBodyTextProps {
    text: string
}

export default function BodyText(props: IBodyTextProps) {
    const { text } = props;

    return (
        <p className="text-white text-base font-regular">
            {text}
        </p>
    )
}
