import './LoginForm.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLogin} from "../../hooks/useLogin.tsx";

const LoginForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cnpj, setCnpj] = useState('')

    const { mutate } = useLogin();
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        mutate({
            username: username,
            password: password,
            cnpj: cnpj
        })
        navigate("/stock")
    }

    return (

        <form onSubmit={handleSubmit} className="row">
            <input
                type="email"
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                className="form-camp"
                placeholder="Username"
                aria-describedby="emailHelp"
            />
            <input
                type="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                className="form-camp"
                placeholder="Password"
            />
            <input
                type="text"
                value={cnpj}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCnpj(e.target.value)}
                className="form-camp"
                placeholder="CNPJ"
            />
            <button type="submit" className="form-button">Entrar</button>
        </form>

    )
}

export default LoginForm;