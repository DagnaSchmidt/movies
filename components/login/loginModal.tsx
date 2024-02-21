"use client"
//components
import Icon from "../icons/icon";

import { useModalContext } from "../../app/providers/providers";
import H2 from "../texts/h2";
import MainButton from "../buttons/mainButton";
import LinkButton from "../buttons/linkButton";

export default function LoginModal() {
    const [isModalOpen, setIsModalOpen] = useModalContext();

    const handleLogin = () => {

    }

    if (isModalOpen) {
        return (
            <div className="absolute top-0 right-0 left-0 z-50 w-full h-screen bg-light flex justify-center items-center">
                <div className="bg-black min-w-80 flex flex-col p-4 rounded-lg">
                    <button
                        className="self-end hover:cursor-pointer"
                        onClick={() => setIsModalOpen(false)}
                    >
                        <Icon name="Close" fill="fill-white" />
                    </button>

                    <H2 title="Login" />
                    <form
                        onSubmit={handleLogin}
                        className="flex flex-col gap-2 pt-8"
                    >
                        <label
                            className="text-white text-sm font-regular"
                        >
                            Email
                        </label>
                        <input
                            className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                        />
                        <label
                            className="text-white text-sm font-regular"
                        >
                            Password
                        </label>
                        <input
                            className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                        />
                        <div className="w-full flex justify-center">
                            <LinkButton firstText="Don't have an account?" secondText="Sign up" handleClick={() => console.log('register')} disabled={false} />
                        </div>
                        <div className="flex justify-center pt-4">
                            <MainButton type="primary" icon={false} text="Login" disabled={false} handleClick={() => console.log('clicked')} />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
};
