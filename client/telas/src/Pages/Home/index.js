import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import "./Home.css";
import Produto from "../../Components/Produto";

function Home() {
    return (
        <>
            <Header />
            <div className="home">
                <h2>Produtos</h2>
                <Link to="/criar-produto">Criar Produto</Link>
                <div className="lista-produtos">
                    <Produto nome="blabla" tipo="blabla" validade="22/12/2003" fornecedor="farmacia" quantidade={10}/>
                </div>
            </div>
        </>
    )
}

export default Home;