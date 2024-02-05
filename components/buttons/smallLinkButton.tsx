"use client"
interface ISmallLinkButtonProps {
    text: string,
    disabled: boolean,
    handleClick: Function
};

export default function SmallLinkButton(props: ISmallLinkButtonProps) {
    const { text, disabled, handleClick } = props;
    return (
        <button
            className="flex justify-center items-center px-4 py-2 hover:opacity-80 disabled:hover:opacity-100 min-w-11"
            onClick={() => handleClick()}
            disabled={disabled}
        >
            <p className="text-base text-primary600 font-normal">{text}</p>
        </button>
    )
};
