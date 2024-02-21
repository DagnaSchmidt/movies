//components
import H2 from "../texts/h2";
import LinkButton from "../buttons/linkButton";
import MainButton from "../buttons/mainButton";

interface IRegisterFormProps {
    setRegister: Function
};

export default function RegisterForm(props: IRegisterFormProps) {
    const { setRegister } = props;

    const handleRegister = () => {

    }


    return (
        <>
            <H2 title="Register" />
            <form
                onSubmit={handleRegister}
                className="flex flex-col gap-2 pt-8"
            >

                <label className="text-white text-sm font-regular">Username</label>
                <input
                    type="text"
                    className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                />

                <label className="text-white text-sm font-regular">Email</label>
                <input
                    type="email"
                    className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                />

                <label className="text-white text-sm font-regular">Password</label>
                <input
                    type="password"
                    className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                />


                <div className="w-full flex justify-center">
                    <LinkButton firstText="Have an account?" secondText="Login" handleClick={() => setRegister(false)} disabled={false} />
                </div>
                <div className="flex justify-center pt-4">
                    <MainButton type="primary" icon={false} text="Register" disabled={false} handleClick={() => console.log('clicked')} />
                </div>
            </form>
        </>
    )
}
