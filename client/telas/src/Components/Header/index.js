import "./Header.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Header() {
    const [user, setUser] = useState(null);
    const urlApi = "http://localhost:3001";
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(!token) {
            toast.error("faça login para utilizar o sistema");
            navigate("/login");
        }
        axios.get(`${urlApi}/usuarios/perfil`, {
            headers: {
                Authorization: token
            }
        }).then((resposta) => {
            setUser(resposta.data)
        }).catch((erro) => {
            console.log(erro);
            toast.error("Faça login para utilizar o sistema");
            navigate("/login");
        })
    }, []);

    function logout() {
        localStorage.removeItem("token");
        toast.info("Você saiu do sistema");
        navigate("/login");
    }

    return (
        <header className="cabecalho">
            <h1>Bons fluidos</h1>
            <div className="links">
                <Link to="/">Produtos</Link>
                <Link to="/doacoes">Doações</Link>
                {user?.isAdmin === 1 && <Link to="/admin">Administração</Link>}
            </div>
            <div>
                <button onClick={logout} className="botao-sair">Sair</button>
            </div>
        </header>
    )
}

export default Header;