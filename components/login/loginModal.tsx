"use client"
//components
import Icon from "../icons/icon";

import { useModalContext } from "../../app/providers/providers";
import H2 from "../texts/h2";
import MainButton from "../buttons/mainButton";
import LinkButton from "../buttons/linkButton";
import { useState } from "react";
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

export default function LoginModal() {
    const [isModalOpen, setIsModalOpen] = useModalContext();
    const [register, setRegister] = useState(false);


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

                    {
                        register ?
                            <RegisterForm setRegister={setRegister} />
                            :
                            <LoginForm setRegister={setRegister} />
                    }

                </div>
            </div>
        )
    }
};
