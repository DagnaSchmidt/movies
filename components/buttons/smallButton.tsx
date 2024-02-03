import Icon from "../icons/icon"

interface ISmallButtonProps {
    icon: boolean,
    text: string,
    disabled: boolean
    handleClick: Function
};

export default function SmallButton(props: ISmallButtonProps) {
    const { icon, text, handleClick, disabled } = props;

    return (
        <button
            className="hover:opacity-80 disabled:hover:opacity-100 min-w-11 px-3 py-2 bg-light flex gap-2 rounded-xl"
            disabled={disabled}
            onClick={() => handleClick()}
        >

            <p className="text-white font-normal text-sm">{text}</p>
            {
                icon && <Icon name='Add' fill={disabled ? 'fill-neutral300' : 'fill-black'} />
            }

        </button>
    )
};
