interface ILinkButtonProps {
    firstText: String,
    secondText: String,
    disabled: boolean,
    handleClick: Function
}

export default function LinkButton(props: ILinkButtonProps) {
    const { firstText, secondText, disabled, handleClick } = props;

    return (
        <button
            className="flex gap-1 justify-center items-center hover:opacity-80 disabled:hover:opacity-100 w-full max-w-52 h-12 px-2"
            disabled={disabled}
            onClick={() => handleClick()}
        >

            <p className={`${disabled ? 'text-neutral' : 'text-primary'} text-sm font-medium whitespace-nowrap`}>{firstText}</p>
            <p className={`${disabled ? 'text-neutral' : 'text-primary600'} text-sm font-medium whitespace-nowrap`}>{secondText}</p>

        </button>
    )
}
