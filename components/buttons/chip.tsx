interface ICHipProps {
    text: string,
    handleClick: Function,
    active: boolean
};

export default function Chip(props: ICHipProps) {
    const { text, handleClick, active } = props;

    return (
        <button
            className={`px-4 py-2 rounded-lg ${active ? 'bg-primary700' : 'bg-extra-light'}`}
            onClick={() => handleClick()}
        >
            <p className="text-white font-regular text-sm text-nowrap">
                {text}
            </p>

        </button>
    )
};
