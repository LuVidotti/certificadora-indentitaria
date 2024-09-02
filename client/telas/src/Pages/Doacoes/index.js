import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Produto from "../../Components/Produto";
import Doacao from "../../Components/Doacao";

function Doacoes() {
    return (
        <>
            <Header />
            <div className="home">
                <h2>Doações</h2>
                <Link to="/criar-doacao">Criar doação</Link>
                <div className="lista-produtos">
                    <Doacao tipo="blabla" doador="blabla" data="22/12/2003" quantidade={10}/>
                </div>
            </div>
        </>
    )
}

export default Doacoes;