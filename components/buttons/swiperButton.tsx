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
            className={`bg-primary w-9 h-9 rounded-full hover:bg-primary400 ${disabled ? 'hidden' : 'flex'} justify-center items-center border-2 border-black`}
            disabled={disabled}
            onClick={() => handleClick()}
        >
            {
                direction === 'next' ? <Icon name="ChevronRight" fill="fill-black" /> : <Icon name="ChevronLeft" fill="fill-black" />
            }
        </button>
    )
}
