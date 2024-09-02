import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="cabecalho">
            <h1>Bons fluidos</h1>
            <div className="links">
                <Link to="/">Produtos</Link>
                <Link to="/doacoes">Doações</Link>
                <Link to="/admin">Administrador</Link>
            </div>
            <div>
                <button className="botao-sair">Sair</button>
            </div>
        </header>
    )
}

export default Header;