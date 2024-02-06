interface ICHipProps {
    text: string
}

export default function Chip(props: ICHipProps) {
    const { text } = props;

    return (
        <button
            className=""
        >
            <p>{text}</p>

        </button>
    )
}
