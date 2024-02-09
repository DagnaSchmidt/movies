import Icon from "../icons/icon";

interface ISwiperButtonProps {
    direction: 'next' | 'prev',
    disabled: boolean,
    handleClick: Function
};

export default function SwiperButton(props: ISwiperButtonProps) {
    const { direction, disabled, handleClick } = props;

    return (
        <button
            className="bg-primary w-9 h-9 rounded-full hover:opacity-90 flex justify-center items-center"
            disabled={disabled}
            onClick={() => handleClick()}
        >
            <Icon name="ChevronRight" fill="fill-black" />
        </button>
    )
}
