import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm.tsx";

const LoginPage = () => {
    return (

        <div className="login-page">
            <div>
                <h1>Login</h1>
                <LoginForm />
            </div>
        </div>

    )
}

export default LoginPage