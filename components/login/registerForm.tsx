//components
import H2 from "../texts/h2";
import LinkButton from "../buttons/linkButton";

interface IRegisterFormProps {
    setRegister: Function
}

export default function RegisterForm(props: IRegisterFormProps) {
    const { setRegister } = props;

    const handleRegister = () => {

    }


    return (
        <>
            <H2 title="Register" />
            <form onSubmit={handleRegister}>

                <div className="w-full flex justify-center">
                    <LinkButton firstText="Have an account?" secondText="Login" handleClick={() => setRegister(false)} disabled={false} />
                </div>
            </form>
        </>
    )
}
