import Icon from "../icons/icon";

interface IMainButtonProps {
    type: 'primary' | 'secondary'
    icon: boolean,
    text: string,
    disabled: boolean,
    handleClick: Function
};

export default function MainButton(props: IMainButtonProps) {
    const { type, icon, text, disabled, handleClick } = props;

    const primaryStyle = 'bg-primary ';
    const secondaryStyle = 'bg-primary600';

    return (
        <button
            className={`hover:opacity-80 disabled:hover:opacity-100 disabled:bg-neutral100 w-full max-w-52 h-12 px-2 flex justify-center items-center rounded-xl ${type === 'primary' ? primaryStyle : secondaryStyle}`}
            disabled={disabled}
            onClick={() => handleClick()}
        >

            {
                icon && <Icon name='Add' fill={disabled ? 'fill-neutral300' : 'fill-black'} />
            }
            <p className={`${disabled ? 'text-neutral300' : 'text-black'} text-base font-bold w-full`}>{text}</p>

        </button>
    )
};
