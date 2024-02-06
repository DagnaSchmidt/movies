import Icon from "../icons/icon"

interface ISmallButtonProps {
    icon: boolean,
    title: boolean,
    text: string,
    disabled: boolean
    handleClick: Function
};

export default function SmallButton(props: ISmallButtonProps) {
    const { icon, text, handleClick, disabled, title } = props;

    return (
        <button
            className="hover:opacity-80 disabled:hover:opacity-100 min-w-11 px-3 py-2 bg-light flex items-center gap-2 rounded-xl border border-primary"
            disabled={disabled}
            onClick={() => handleClick()}
        >

            {
                title && <p className="text-black font-normal text-nowrap text-sm">{text}</p>
            }

            {
                icon && <Icon name='ChevronRight' fill={disabled ? 'fill-neutral300' : 'fill-black'} />
            }

        </button>
    )
};
