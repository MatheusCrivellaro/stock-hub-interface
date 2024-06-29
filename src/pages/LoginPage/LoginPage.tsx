import './LoginPage.css'
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
const LoginPage = () => {
    return (

        <div className="login-page">
            <div className="container-not-login row">
                <div className="painel-not-login col-8 shadow-lg">
                    <div className="div-painel-not-login">
                        <h1>Entre com seu login</h1>
                        <LoginForm />
                    </div>
                    <img className="" src="/public/pexels-akshay-mehra-302736-10834114.jpg" alt=""/>
                </div>
            </div>
        </div>

    )
}

export default LoginPage