import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import Doacao from "../../Components/Doacao";
import axios from "axios";
import { useState, useEffect } from "react";

function Doacoes() {
    const [doacoes, setDoacoes] = useState([]);
    const urlApi = "http://localhost:3001";

    useEffect(() => {
        axios.get(`${urlApi}/doacoes`).then((resposta) => {
            setDoacoes(resposta.data);
        }).catch((erro) => {
            console.log(erro);
        })
    }, [doacoes]);

    return (
        <>
            <Header />
            <div className="home">
                <h2>Doações</h2>
                <Link to="/criar-doacao">Criar doação</Link>
                <div className="lista-produtos">
                    {
                        doacoes.map((doacao) => <Doacao
                            tipo={doacao.tipo}
                            doador={doacao.doador}
                            data={doacao.data}
                            quantidade={doacao.quantidade}
                            id={doacao._id}
                            key={doacao._id}
                        />)
                    }
                </div>
            </div>
        </>
    )
}

export default Doacoes;