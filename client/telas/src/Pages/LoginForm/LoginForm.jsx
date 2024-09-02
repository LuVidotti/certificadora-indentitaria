import './LoginForm.css';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [senha, setSenha] = useState("");
    const urlApi = "http://localhost:3001";
    const navigate = useNavigate();

    function fazerLogin(e) {
        e.preventDefault();

        axios.post(`${urlApi}/usuarios/login`, {
            nomeUsuario: username,
            senha: senha
        }).then((resposta) => {
            localStorage.setItem("token", resposta.data.token);
            toast.success("Login realizado com sucesso!!!");
            navigate("/");
        }).catch((erro) => {
            console.log(erro);
            toast.error(erro.response.data.message);
        })
    }

    return (
        <div className='body'>
            <div className = 'wrapper'>
                <form onSubmit={(e) => fazerLogin(e)}>
                    <h1>Login</h1>
                        <div className = "input-box">
                            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username'/>
                        </div>
                        <div className= "input-box">
                            <input onChange={(e) => setSenha(e.target.value)} type="password" placeholder='Senha'/>
                        </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;