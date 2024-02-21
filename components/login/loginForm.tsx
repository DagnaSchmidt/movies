//components
import H2 from "../texts/h2";
import LinkButton from "../buttons/linkButton";
import MainButton from "../buttons/mainButton";

interface ILoginFormProps {
    setRegister: Function
}

export default function LoginForm(props: ILoginFormProps) {
    const { setRegister } = props;

    const handleLogin = () => {

    }

    return (
        <>
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
                    type="email"
                    className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                />
                <label
                    className="text-white text-sm font-regular"
                >
                    Password
                </label>
                <input
                    type="password"
                    className="h-11 w-full max-w-[640px] bg-extra-light focus:outline-none rounded-xl placeholder:text-neutral focus:border-b-[1px] focus:border-b-primary text-white pl-3"
                />
                <div className="w-full flex justify-center">
                    <LinkButton firstText="Don't have an account?" secondText="Sign up" handleClick={() => setRegister(true)} disabled={false} />
                </div>
                <div className="flex justify-center pt-4">
                    <MainButton type="primary" icon={false} text="Login" disabled={false} handleClick={() => console.log('clicked')} />
                </div>
            </form>
        </>
    )
}
