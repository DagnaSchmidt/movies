interface ICHipProps {
    text: string
};

export default function Chip(props: ICHipProps) {
    const { text } = props;

    return (
        <button
            className="px-4 py-2 rounded-lg bg-extra-light"
        >
            <p className="text-white font-regular text-sm">
                {text}
            </p>

        </button>
    )
}
